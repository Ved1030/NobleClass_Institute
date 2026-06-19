import { NextRequest, NextResponse } from 'next/server';

import { API_URL } from '@/lib/config';
const BACKEND_URL = API_URL;

const FORBIDDEN_PHRASES = [
  'ghatkopar east', 'shivaji technical',
];
const FORBIDDEN_PATTERNS = [/97691\d{5}/, /99208\d{5}/, /4\.9.*52.*Review/i];

const SAFE_RESPONSES = {
  courses: "We offer coaching for Std 8th, 9th and 10th students (State Board & CBSE). Our teaching focuses on concept clarity, regular practice, and academic excellence.",
  location: "Labbdhi's Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai.",
  contact: "Official contact details are currently being updated. Please submit an enquiry form on the website and our team will contact you.",
  fees: "Fee details are currently being updated. Please submit an enquiry form on our website for fee information.",
};

const TAGLINE = "Where learning is Journey";

function containsForbidden(text: string): boolean {
  const lower = text.toLowerCase();
  if (FORBIDDEN_PHRASES.some(p => lower.includes(p))) return true;
  if (FORBIDDEN_PATTERNS.some(p => p.test(text))) return true;
  return false;
}

function getSafeFallback(userMessage: string): string | null {
  const lower = userMessage.toLowerCase();
  if (/\bcourses?\b|\bprograms?\b|\bclasses?\b|\bcoaching\b|\boffer\b|\bstudy\b|\bteach\b/.test(lower)) return SAFE_RESPONSES.courses;
  if (/\blocation\b|\baddress\b|\bwhere\b|\blocated\b|\bcome\b|\bplace\b|\bnear\b|\breach\b/.test(lower)) return SAFE_RESPONSES.location;
  if (/\bphone\b|\bcontact\b|\bemail\b|\bnumber\b|\bcall\b|\breach us\b|\bwhatsapp\b|\bmobile\b|\btel\b/.test(lower)) return SAFE_RESPONSES.contact;
  if (/\bfee\b|\bfees\b|\bcost\b|\bprice\b|\bcharge\b|\bpayment\b|\btuition\b/.test(lower)) return SAFE_RESPONSES.fees;
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${BACKEND_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    let reply = data.reply || '';

    // Filter out forbidden content from AI responses
    const messages = body.messages || [];
    const lastUserMsg = [...messages].reverse().find((m: any) => m.role === 'user');
    const userText = lastUserMsg?.content || '';

    if (containsForbidden(reply)) {
      const fallback = getSafeFallback(userText);
      if (fallback) reply = fallback;
    }

    return NextResponse.json({ reply }, { status: response.status });
  } catch (error) {
    console.error('Chat proxy error:', error);
    return NextResponse.json(
      { reply: "Sorry, I'm currently unavailable. Please visit our center in Ghatkopar West or submit an inquiry form." },
      { status: 500 }
    );
  }
}
