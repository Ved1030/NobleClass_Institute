import { Router, Request, Response } from 'express';
import { config } from '../config';

const router = Router();

const FORBIDDEN_PATTERNS = [
  /VS\s*Tutorials/i,
  /Excellence\s*Educare/i,
  /Drushti\s*Sapphire/i,
  /Pant\s*Nagar/i,
  /Shop\s*No\.?\s*11/i,
  /97691\d{5}/,
  /99208\d{5}/,
  /4\.9.*52.*Review/i,
  /Ghatkopar\s*East/i,
  /Shivaji\s*Technical/i,
];

const FORBIDDEN_PHRASES = [
  'vs tutorials',
  'excellence educare',
  'drushti sapphire',
  'pant nagar',
  'shop no. 11',
  '97691',
  '99208',
  '4.9',
  '52 reviews',
  'ghatkopar east',
  'shivaji technical',
];

function containsForbiddenContent(text: string): boolean {
  const lower = text.toLowerCase();
  return FORBIDDEN_PHRASES.some(p => lower.includes(p));
}

const ACADEMY_INFO = {
  name: 'Labbdis Academy',
  established: '2007',
  location: 'Near Shreyas Cinema, Ghatkopar West, Mumbai',
  courses: ['Std 7th Coaching', 'Std 8th Coaching', 'Std 9th Coaching', 'Std 10th Coaching'],
};

const HARDCODED_RESPONSES: Record<string, string> = {
  courses:
    "We offer coaching for Std 7th, 8th, 9th and 10th students. Our teaching focuses on concept clarity, regular practice, and academic excellence.",
  location:
    "Labbdis Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai.",
  contact:
    "Official contact details are currently being updated. Please submit an enquiry form on the website and our team will contact you.",
  fees:
    "Fee details are currently being updated. Please submit an enquiry form on our website for fee information.",
};

function getHardcodedResponse(userMessage: string): string | null {
  const lower = userMessage.toLowerCase();
  if (/\bcourses?\b|\bprograms?\b|\bclasses?\b|\bcoaching\b|\boffer\b|\bstudy\b|\bteach\b/.test(lower)) return HARDCODED_RESPONSES.courses;
  if (/\blocation\b|\baddress\b|\bwhere\b|\blocated\b|\bcome\b|\bplace\b|\bnear\b|\breach\b/.test(lower)) return HARDCODED_RESPONSES.location;
  if (/\bphone\b|\bcontact\b|\bemail\b|\bnumber\b|\bcall\b|\breach us\b|\bwhatsapp\b|\bmobile\b|\btel\b/.test(lower)) return HARDCODED_RESPONSES.contact;
  if (/\bfee\b|\bfees\b|\bcost\b|\bprice\b|\bcharge\b|\bpayment\b|\btuition\b/.test(lower)) return HARDCODED_RESPONSES.fees;
  return null;
}

const SYSTEM_PROMPT = `You are Labbdhis AI. You represent Labbdis Academy only.

## Academy Details

Name: Labbdis Academy

Location:
Near Shreyas Cinema,
Ghatkopar West,
Mumbai

Established:
2007

Courses:
- Std 7th Coaching
- Std 8th Coaching
- Std 9th Coaching
- Std 10th Coaching

Features:
- Small Batch Sizes
- Personal Attention
- Concept-Based Learning
- Regular Tests
- Doubt Solving Sessions
- Parent Feedback Meetings

## Forbidden Content

Never mention or generate information about:
- VS Tutorials
- Excellence Educare
- Drushti Sapphire
- Pant Nagar
- Shop No. 11
- Ghatkopar East
- Any phone number starting with 97691
- Any rating or review numbers
- Any previous institute name

## Exact Responses

If user asks about courses:
"We offer coaching for Std 7th, 8th, 9th and 10th students. Our teaching focuses on concept clarity, regular practice, and academic excellence."

If user asks about location or address:
"Labbdis Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai."

If user asks for phone number, email, or contact details:
"Official contact details are currently being updated. Please submit an enquiry form on the website and our team will contact you."

If user asks about fees:
"Fee details are currently being updated. Please submit an enquiry form on our website for fee information."

## Few-Shot Examples

User: What courses do you offer?
Assistant: We offer coaching for Std 7th, 8th, 9th and 10th students. Our teaching focuses on concept clarity, regular practice, and academic excellence.

User: Where are you located?
Assistant: Labbdis Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai.

User: What is your phone number?
Assistant: Official contact details are currently being updated. Please submit an enquiry form on the website and our team will contact you.

User: Tell me about your programs.
Assistant: We provide coaching for Std 7th, 8th, 9th and 10th students with a focus on concept clarity, academic excellence, and personalized attention. Our features include small batch sizes, regular tests, doubt solving sessions, and parent feedback meetings.

User: What is your email?
Assistant: Official contact details are currently being updated. Please submit an enquiry form on the website and our team will contact you.

User: What is your address?
Assistant: Labbdis Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai.`;

router.post('/', async (req: Request, res: Response) => {
  try {
    const { message, messages } = req.body;

    let chatMessages: { role: string; content: string }[];

    if (messages && Array.isArray(messages)) {
      chatMessages = messages;
    } else if (message && typeof message === 'string') {
      chatMessages = [{ role: 'user', content: message }];
    } else {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Extract the last user message for hardcoded matching
    const lastUserMsg = [...chatMessages].reverse().find(m => m.role === 'user');
    const userText = lastUserMsg?.content || '';
    const hardcodedReply = getHardcodedResponse(userText);
    if (hardcodedReply) {
      return res.json({ reply: hardcodedReply });
    }

    if (!config.sarvam.apiKey) {
      console.warn('Sarvam API key not configured');
      return res.json({
        reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website or visit our center in Ghatkopar West.",
      });
    }

    const response = await fetch('https://api.sarvam.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.sarvam.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: config.sarvam.model,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...chatMessages],
        temperature: 0,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Sarvam API error:', response.status, errorData);
      return res.json({
        reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website or visit our center in Ghatkopar West.",
      });
    }

    const data = await response.json() as { choices?: { message?: { content?: string } }[] };
    let reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.json({
        reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website or visit our center in Ghatkopar West.",
      });
    }

    // Post-processing filter: if reply contains forbidden content, replace with hardcoded response
    if (containsForbiddenContent(reply)) {
      const fallback = getHardcodedResponse(userText);
      if (fallback) {
        reply = fallback;
      } else {
        reply = "I'm sorry, I encountered an error generating a response. Please try rephrasing your question or submit an enquiry form on our website.";
      }
    }

    res.json({ reply });
  } catch (error) {
    console.error('Chat route error:', error);
    res.json({
      reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website.",
    });
  }
});

export default router;
