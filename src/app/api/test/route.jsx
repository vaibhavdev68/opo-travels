import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    // Test different endpoints
    const endpoints = [
      "https://generativelanguage.googleapis.com/v1/models",
      "https://generativelanguage.googleapis.com/v1beta/models"
    ];

    const results = {};

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(`${endpoint}?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();
        results[endpoint] = {
          status: response.status,
          models: data.models ? data.models.map(m => m.name) : [],
          error: !response.ok ? data : null
        };
      } catch (error) {
        results[endpoint] = {
          error: error.message
        };
      }
    }

    return NextResponse.json({
      apiKeyPresent: !!process.env.GEMINI_API_KEY,
      apiKeyLength: process.env.GEMINI_API_KEY?.length,
      results
    });

  } catch (error) {
    return NextResponse.json({
      error: error.message
    }, { status: 500 });
  }
}