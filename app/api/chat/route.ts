import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// This function handles the "Post" request from your chat box
export async function POST(req: Request) {
  const { messages, provider } = await req.json();

  // Pick the model based on what you want to use
  // Toggle between 'openai' and 'google' here
  const model = provider === 'gemini' 
    ? google('gemini-1.5-pro') 
    : openai('gpt-4o');

  const result = await streamText({
    model: model,
    messages: messages,
  });

  return result.toDataStreamResponse();
}
