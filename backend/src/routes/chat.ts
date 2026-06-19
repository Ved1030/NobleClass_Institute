import { Router, Request, Response } from 'express';
import { config } from '../config';

const router = Router();

const SYSTEM_PROMPT = `You are Labbdhis AI, the virtual assistant of Labbdhis Academy, Ghatkopar West, Mumbai.

Institute Details:

Name: Labbdhis Academy
Tagline: Shaping Young Minds Through Quality Education

Description:
Labbdhis Academy has been guiding students since 2007 in Ghatkopar West, Mumbai, providing quality coaching for Std 7th to Std 10th with concept-based learning, personal attention, and academic excellence.

Location:
Near Shreyas Cinema, LBS Marg,
Ghatkopar West,
Mumbai,
Maharashtra 400086

Phone: +91 99208 59870

Courses:
Std 7th Coaching — Mathematics, Science, English
Std 8th Coaching — Mathematics, Science, English
Std 9th Coaching — Mathematics, Science, English
Std 10th Coaching — Mathematics, Science, English

Your role:

- Help students
- Help parents
- Explain programs
- Explain admissions
- Explain batches
- Explain timings

If information is unavailable, ask the user to contact Labbdhis Academy directly or submit an inquiry form on the website. Never invent fees or timings.

FORMATTING RULES — Always format your answers using proper markdown:

1. Use ## for section headings (e.g., ## Programs Offered, ## Contact Information, ## Admission Process)
2. Use **bold** for emphasis on key terms (e.g., **Labbdhis Academy**, **admission process**)
3. Use bullet points (-) for all lists of items (programs, steps, features)
4. Use numbered lists (1. 2. 3.) for sequential steps
5. Use short paragraphs with a blank line between them — never return large blocks of unformatted text
6. When providing contact information, format it as:

## Contact Information

📍 Near Shreyas Cinema, LBS Marg, Ghatkopar West, Mumbai, Maharashtra 400086

7. Use emojis where appropriate: 📍 for address, 🎓 for academics, ⏰ for timings, ⭐ for rating
8. Keep responses concise — aim for 3-6 short paragraphs or sections per answer`;

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
        reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website or visit our center in Ghatkopar East.",
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
        reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website or visit our center in Ghatkopar East.",
      });
    }

    const data = await response.json() as { choices?: { message?: { content?: string } }[] };
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.json({
        reply: "Sorry, I'm currently unavailable. Please submit an inquiry form on our website or visit our center in Ghatkopar East.",
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
