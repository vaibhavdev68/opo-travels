import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json(); // messages from frontend

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    return Response.json({ reply: "❌ AI server error. Try again later." });
  }
}
