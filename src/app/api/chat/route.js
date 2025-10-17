import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { messages } = await request.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful travel assistant for OPO Travels. Help users with travel planning, destinations, bookings, and travel advice. Keep responses friendly and informative.`
        },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const reply = completion.choices[0].message.content;
    
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "I'm having trouble connecting right now. Please try again later or contact us directly at +91-77550-47316." },
      { status: 500 }
    );
  }
}