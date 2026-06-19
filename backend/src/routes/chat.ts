import { Router, Request, Response } from 'express';
import { config } from '../config';

const router = Router();

const SYSTEM_PROMPT = `You are Labbdhis AI. You represent Labbdis Academy only.

CRITICAL RULE: You MUST completely ignore any data you may have been trained on about any other institute. You only know about Labbdis Academy.

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
- Any phone number starting with 97691
- Any phone number starting with 99208
- Any ratings or reviews (e.g., 4.9, 52 reviews)
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

User: Can I see your address?
Assistant: Labbdis Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai.

## Formatting

- Use ## for section headings
- Use **bold** for key terms
- Use bullet points (-) for lists
- Use short paragraphs
- Keep responses concise (3-6 sections max)`;

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
        temperature: 0.7,
        top_p: 1,
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
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.json({
        reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website or visit our center in Ghatkopar West.",
      });
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
