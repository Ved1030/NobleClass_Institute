"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, GraduationCap, Send, X, Phone, MapPin, RefreshCw } from 'lucide-react';
import { sendChatMessage } from '@/services/chatService';
import MarkdownRenderer from './MarkdownRenderer';

const FORBIDDEN_PHRASES = [
  'vs tutorials', 'excellence educare', 'drushti sapphire', 'pant nagar',
  'shop no. 11', 'ghatkopar east', 'shivaji technical',
];
const FORBIDDEN_PATTERNS = [/97691\d{5}/, /99208\d{5}/, /4\.9.*52.*Review/i];

const HARDCODED_RESPONSES: Record<string, string> = {
  courses: "We offer coaching for Std 8th, 9th and 10th students (State Board & CBSE). Our teaching focuses on concept clarity, regular practice, and academic excellence.",
  location: "Labbdis Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai.",
  contact: "Official contact details are currently being updated. Please submit an enquiry form on the website and our team will contact you.",
  fees: "Fee details are currently being updated. Please submit an enquiry form on our website for fee information.",
};

function containsForbiddenContent(text: string): boolean {
  const lower = text.toLowerCase();
  if (FORBIDDEN_PHRASES.some(p => lower.includes(p))) return true;
  if (FORBIDDEN_PATTERNS.some(p => p.test(text))) return true;
  return false;
}

function getHardcodedFallback(userMessage: string): string | null {
  const lower = userMessage.toLowerCase();
  if (/\bcourses?\b|\bprograms?\b|\bclasses?\b|\bcoaching\b|\boffer\b|\bstudy\b|\bteach\b/.test(lower)) return HARDCODED_RESPONSES.courses;
  if (/\blocation\b|\baddress\b|\bwhere\b|\blocated\b|\bcome\b|\bplace\b|\bnear\b|\breach\b/.test(lower)) return HARDCODED_RESPONSES.location;
  if (/\bphone\b|\bcontact\b|\bemail\b|\bnumber\b|\bcall\b|\breach us\b|\bwhatsapp\b|\bmobile\b|\btel\b/.test(lower)) return HARDCODED_RESPONSES.contact;
  if (/\bfee\b|\bfees\b|\bcost\b|\bprice\b|\bcharge\b|\bpayment\b|\btuition\b/.test(lower)) return HARDCODED_RESPONSES.fees;
  return null;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  'Admission Process',
  'Courses Offered',
  'Academic Programs',
  'Contact Details',
  'Faculty Information',
  'Fee Structure',
];

const QUESTION_MAP: Record<string, string> = {
  'Admission Process': 'Can you tell me about the admission process at Labbdhis Academy?',
  'Courses Offered': 'What courses do you offer at Labbdhis Academy?',
  'Academic Programs': 'What academic programs are available at Labbdhis Academy?',
  'Contact Details': 'What are the contact details for Labbdhis Academy?',
  'Faculty Information': 'Tell me about the faculty at Labbdhis Academy.',
  'Fee Structure': 'What is the fee structure at Labbdhis Academy?',
};

const WELCOME_MESSAGE =
  "Hello! I'm Labbdhis AI, your virtual assistant. How can I help you today? Feel free to ask me about courses, admissions, faculty, or anything else about Labbdhis Academy.";

const UNAVAILABLE_MESSAGE =
  "Labbdhis AI is currently unavailable.\n\nPlease contact us through our inquiry form.";

const LOADING_MESSAGES = {
  initial: 'Connecting to Labbdhis AI...',
  slow: 'Waking up Labbdhis AI...',
  slowDetail: 'This may take a few moments.',
};

const REQUEST_TIMEOUT = 60000;
const SLOW_WARNING_DELAY = 2000;

async function fetchWithTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number
): Promise<T> {
  let timeoutHandle: ReturnType<typeof setTimeout>;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutHandle = setTimeout(
      () => reject(new Error('Request timed out')),
      timeoutMs
    );
  });
  return Promise.race([
    promise.finally(() => clearTimeout(timeoutHandle!)),
    timeoutPromise,
  ]);
}

export default function NobleAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState<'initial' | 'slow'>('initial');
  const [visible, setVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [tooltipText, setTooltipText] = useState('Need help choosing a course?');
  const [showTooltip, setShowTooltip] = useState(true);
  const [pulseActive, setPulseActive] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const slowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const retryTriggeredRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasInteracted) return;
    const timer = setTimeout(() => setTooltipText('Ask Labbdhis AI'), 8000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  useEffect(() => {
    if (!visible || hasInteracted || isOpen) {
      setPulseActive(false);
      return;
    }
    const timer = setTimeout(() => setPulseActive(true), 5000);
    return () => clearTimeout(timer);
  }, [visible, hasInteracted, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 200);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'welcome', role: 'assistant', content: WELCOME_MESSAGE },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isLoading) {
      slowTimerRef.current = setTimeout(() => {
        setLoadingStage('slow');
      }, SLOW_WARNING_DELAY);
    } else {
      if (slowTimerRef.current) {
        clearTimeout(slowTimerRef.current);
        slowTimerRef.current = null;
      }
      setLoadingStage('initial');
    }
    return () => {
      if (slowTimerRef.current) {
        clearTimeout(slowTimerRef.current);
      }
    };
  }, [isLoading]);

  const doSend = useCallback(
    async (msgs: Message[], isRetry: boolean) => {
      setIsLoading(true);
      setLoadingStage('initial');
      retryTriggeredRef.current = false;

      try {
        const { reply } = await fetchWithTimeout(
          sendChatMessage(
            msgs.map((m) => ({
              role: m.role,
              content: m.content,
            }))
          ),
          REQUEST_TIMEOUT
        );

        // Client-side safety filter: replace forbidden content with hardcoded response
        let safeReply = reply;
        const lastUserMsg = [...msgs].reverse().find(m => m.role === 'user');
        const userText = lastUserMsg?.content || '';
        if (containsForbiddenContent(safeReply)) {
          const fallback = getHardcodedFallback(userText);
          safeReply = fallback || "I'm sorry, I encountered an error. Please try rephrasing your question or submit an enquiry form on our website.";
        }

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: safeReply,
          },
        ]);
      } catch (err) {
        const isTimeout = err instanceof Error && err.message === 'Request timed out';

        if (isTimeout && !isRetry && !retryTriggeredRef.current) {
          retryTriggeredRef.current = true;
          setRetryCount((c) => c + 1);
          return doSend(msgs, true);
        }

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: UNAVAILABLE_MESSAGE,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handleSend = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || isLoading) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content,
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput('');
      setHasInteracted(true);

      doSend(updatedMessages, false);
    },
    [messages, isLoading, doSend]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setShowTooltip(false);
    setHasInteracted(true);
    setPulseActive(false);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  function hasContactInfo(content: string): boolean {
    const lower = content.toLowerCase();
    const keywords = [
      '📞',
      '📍',
      'phone',
      'contact',
      'address',
      'call us',
      'reach us',
    ];
    return keywords.some((k) => lower.includes(k));
  }

  function hasUnavailableMessage(content: string): boolean {
    return content.includes('Labbdhis AI is currently unavailable');
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: pulseActive ? [1, 1.05, 1, 1.05, 1] : 1,
            }}
            transition={
              pulseActive
                ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.5, ease: 'easeOut' }
            }
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: -4, scale: 1.05 }}
            onClick={openChat}
            className="fixed bottom-[96px] right-6 md:bottom-[104px] md:right-6 z-[9999] w-14 h-14 md:w-16 md:h-16 bg-[#005DAA] text-white rounded-[20px] flex items-center justify-center cursor-pointer"
            style={{ boxShadow: '0 10px 25px rgba(0,93,170,0.25)' }}
            aria-label="Ask Labbdhis AI"
          >
            <Sparkles className="w-7 h-7 md:w-8 md:h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && visible && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="fixed bottom-[160px] right-6 md:bottom-[176px] md:right-6 z-[9999] pointer-events-none"
          >
            <div className="relative bg-white text-noble-blue px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap border border-noble-blue/10">
              {tooltipText}
              <div className="absolute -bottom-[5px] right-6 w-[10px] h-[10px] bg-white border-r border-b border-noble-blue/10 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 md:inset-auto md:bottom-[100px] md:right-6 z-[60] md:w-[420px] md:max-h-[600px] bg-white md:rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
            style={{
              boxShadow:
                '0 20px 60px rgba(0,0,0,0.15)',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-noble-blue to-[#0B74D1] text-white px-5 flex items-center gap-3 shrink-0" style={{ height: '70px' }}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base">Labbdhis AI</h3>
                <p className="text-xs text-white/80 truncate">
                  Your Virtual Admission Counselor
                </p>
              </div>
              <button
                onClick={closeChat}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors shrink-0"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <div className="max-w-[88%] px-4 py-3 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-md">
                      <MarkdownRenderer content={message.content} />
                        {(hasContactInfo(message.content) || hasUnavailableMessage(message.content)) && (
                        <div className="flex gap-2 mt-3 pt-3 border-t border-gray-200">
                          <a
                            href="https://www.google.com/maps/search/Ghatkopar+West+Mumbai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-noble-blue bg-noble-blue/10 px-3 py-2 rounded-lg hover:bg-noble-blue/20 transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            Open Maps
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="max-w-[85%] px-4 py-3 rounded-2xl bg-noble-blue text-white rounded-br-md text-sm leading-relaxed">
                      {message.content}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 text-sm text-gray-500">
                    {loadingStage === 'initial' ? (
                      <>
                        <span>{LOADING_MESSAGES.initial}</span>
                        <span className="inline-flex gap-0.5 ml-1">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="flex items-center gap-2">
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>{LOADING_MESSAGES.slow}</span>
                        </span>
                        <p className="text-xs text-gray-400 mt-1">{LOADING_MESSAGES.slowDetail}</p>
                      </>
                    )}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 shrink-0">
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(QUESTION_MAP[q])}
                      disabled={isLoading}
                      className="text-xs px-3 py-1.5 rounded-full border border-noble-blue/20 text-noble-blue hover:bg-noble-blue hover:text-white transition-colors disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t shrink-0" style={{ height: '70px' }}>
              <div className="flex gap-2 h-full items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about admissions, courses, faculty..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/20 focus:border-noble-blue disabled:opacity-50 transition-shadow"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-noble-blue text-white flex items-center justify-center hover:bg-noble-blue-dark transition-colors disabled:opacity-50 shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
