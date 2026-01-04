import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const apiKeyExists = !!process.env.GROQ_API_KEY;
  const apiKeyLength = process.env.GROQ_API_KEY?.length || 0;

  return res.status(200).json({
    status: 'API route is working',
    apiKeyConfigured: apiKeyExists,
    apiKeyLength: apiKeyLength,
    timestamp: new Date().toISOString(),
    message: apiKeyExists 
      ? 'GROQ_API_KEY is configured correctly' 
      : 'GROQ_API_KEY is NOT set in environment variables'
  });
}

