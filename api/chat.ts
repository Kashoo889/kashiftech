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
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
    console.error('GROQ_API_KEY is not set in environment variables');
    console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('GROQ')));
    return res.status(500).json({ 
      error: 'Server configuration error: GROQ_API_KEY environment variable is not set. Please configure it in Vercel project settings.' 
    });
  }

  // Log that API key is present (but don't log the actual key)
  console.log('GROQ_API_KEY is configured (length:', apiKey.length, 'characters)');

  try {
    // Call Groq API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
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

    if (!groqResponse.ok) {
      const errorData = await groqResponse.text();
      console.error('Groq API error:', groqResponse.status, errorData);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to get AI response. Please try again.';
      if (groqResponse.status === 401) {
        errorMessage = 'Invalid API key. Please check your GROQ_API_KEY in Vercel settings.';
      } else if (groqResponse.status === 429) {
        errorMessage = 'Rate limit exceeded. Please try again in a moment.';
      } else if (groqResponse.status >= 500) {
        errorMessage = 'Groq API is temporarily unavailable. Please try again later.';
      }
      
      return res.status(groqResponse.status).json({ 
        error: errorMessage 
      });
    }

    const data = await groqResponse.json();

    // Extract the AI response
    const aiMessage = data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      console.error('Invalid Groq response structure:', JSON.stringify(data));
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ 
      error: `An error occurred: ${errorMessage}. Please try again.` 
    });
  }
}

