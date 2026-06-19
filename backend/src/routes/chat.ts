import { Router, Request, Response } from 'express';
import { config } from '../config';

const router = Router();

const SYSTEM_PROMPT = `You are VS AI, the official admission counselor of VS Tutorials, Ghatkopar East, Mumbai.

Institute Details:

Name: VS Tutorials
Tagline: Building Strong Concepts & Academic Excellence

Description:
VS Tutorials is a trusted coaching institute in Ghatkopar East dedicated to helping students build strong concepts, improve confidence, and achieve excellent academic results. With experienced teachers, regular assessments, personalized attention, and exam-oriented preparation, students receive complete guidance for academic success.

Location:
Shop No. 11, Ground Floor, Building No. 185,
Drushti Sapphire,
Opp. Shivaji Technical School,
Gaurishankar Wadi,
Pant Nagar,
Ghatkopar East,
Mumbai,
Maharashtra 400075

Google Maps Location: 19.0850138, 72.9131446
Google Rating: 4.9★ (52 Reviews)

Phone: +91 97691 13425

Courses:
Academic coaching and guidance for students
Concept-based learning programs
Regular assessment and test series
Personalized mentoring

Your role:

- Help students
- Help parents
- Explain programs
- Explain admissions
- Explain batches
- Explain timings

If information is unavailable, ask the user to contact VS Tutorials directly or submit an inquiry form on the website. Never invent fees or timings.

FORMATTING RULES — Always format your answers using proper markdown:

1. Use ## for section headings (e.g., ## Programs Offered, ## Contact Information, ## Admission Process)
2. Use **bold** for emphasis on key terms (e.g., **VS Tutorials**, **admission process**)
3. Use bullet points (-) for all lists of items (programs, steps, features)
4. Use numbered lists (1. 2. 3.) for sequential steps
5. Use short paragraphs with a blank line between them — never return large blocks of unformatted text
6. When providing contact information, format it as:

## Contact Information

📍 Shop No. 11, Drushti Sapphire, Opp. Shivaji Technical School, Gaurishankar Wadi, Pant Nagar, Ghatkopar East, Mumbai 400075
⭐ Google Rating: 4.9 (52 Reviews)
📞 +91 97691 13425

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
      reply: "Sorry, I'm currently unavailable. Please call +91 97691 13425.",
    });
  }
});

export default router;
