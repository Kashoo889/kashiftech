import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_PROMPT = `You are Kashif's professional portfolio assistant.
Only answer questions about:
- Kashif's skills (WordPress, React, Next.js, MERN Stack, Frontend Development)
- Projects and experience
- Services and hiring
- Contact information

If a user asks anything outside this scope, politely redirect the conversation back to Kashif's professional profile.

Be concise, friendly, and professional. Always stay on topic about Kashif's portfolio.`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get message from request body
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Get API key from environment variables
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    console.error('GROQ_API_KEY is not set');
    return res.status(500).json({ 
      error: 'Server configuration error. Please contact the administrator.' 
    });
  }

  try {
    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API error:', response.status, errorData);
      return res.status(response.status).json({ 
        error: 'Failed to get AI response. Please try again.' 
      });
    }

    const data = await response.json();

    // Extract the AI response
    const aiMessage = data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      return res.status(500).json({ 
        error: 'Invalid response from AI service.' 
      });
    }

    // Return the AI response
    return res.status(200).json({ 
      message: aiMessage 
    });

  } catch (error) {
    console.error('Error calling Groq API:', error);
    return res.status(500).json({ 
      error: 'An error occurred while processing your request. Please try again.' 
    });
  }
}

