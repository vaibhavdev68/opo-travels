import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // List available models
    const models = await genAI.listModels();
    
    // Extract model names and their supported methods
    const modelInfo = models.map(model => ({
      name: model.name,
      supportedMethods: model.supportedGenerationMethods || [],
      description: model.description
    }));

    return NextResponse.json({
      success: true,
      models: modelInfo,
      totalModels: modelInfo.length
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      availableModels: [],
      note: "Make sure your API key is valid and has proper permissions"
    }, { status: 500 });
  }
}