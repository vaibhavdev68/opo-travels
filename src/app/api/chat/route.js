import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { messages } = await request.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: "I'm currently experiencing technical difficulties. Please try again later or contact us directly at +91-77550-47316." },
        { status: 500 }
      );
    }

    // Get the latest user message
    const userMessage = messages[messages.length - 1]?.content || '';

    // Prepare the prompt for Gemini
    const systemPrompt = `You are a helpful travel assistant for OPO Travels. Help users with travel planning, destinations, bookings, and travel advice. Keep responses friendly and informative.

About OPO Travels:
- We specialize in customized travel packages
- We offer flights, hotels, and complete tour packages
- Popular destinations: Kerala, Goa, Rajasthan, Himachal
- Contact: WhatsApp +91-77550-47316, email info@opotravels.com

Guidelines:
- Be conversational and helpful
- Provide travel suggestions and advice
- For specific bookings, direct users to our website or contact methods
- Keep responses concise but informative
- Use emojis occasionally to make it engaging
- Do not mention that you are an AI assistant
- Focus on travel-related queries but be helpful with general questions too`;

    // Build conversation context
    const conversationContext = messages.map(msg => 
      `${msg.role}: ${msg.content}`
    ).join('\n');

    const fullPrompt = `${systemPrompt}\n\nCurrent conversation:\n${conversationContext}\n\nAssistant:`;

    const modelsToTry = [
      { name: "gemini-2.0-flash", endpoint: "v1" },
      { name: "gemini-2.0-flash-001", endpoint: "v1" },
      { name: "gemini-1.5-flash", endpoint: "v1" },
      { name: "gemini-1.5-pro", endpoint: "v1" }
    ];

    let lastError = null;

    for (const { name: model, endpoint } of modelsToTry) {
      try {
        console.log(`Trying Gemini model: ${model}`);
        
        const API_URL = `https://generativelanguage.googleapis.com/${endpoint}/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
        
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: fullPrompt
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1000,
            }
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
          let generatedText = data.candidates[0].content.parts[0].text;
          
          // Clean up response
          generatedText = generatedText.replace(/\*\*/g, '').replace(/\*/g, '');
          
          console.log(`Success with Gemini model: ${model}`);
          
          return NextResponse.json({ 
            reply: generatedText
          });
        } else {
          throw new Error('Unexpected response format from Gemini API');
        }
        
      } catch (modelError) {
        console.log(`Gemini model ${model} failed:`, modelError.message);
        lastError = modelError;
        continue; // Try next model
      }
    }

    // If all models fail, use fallback responses
    console.error('All Gemini models failed, using fallback response');
    const fallbackReply = generateTravelResponse(userMessage);
    
    return NextResponse.json({ 
      reply: fallbackReply
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Final fallback
    const fallbackReply = generateTravelResponse('');
    return NextResponse.json({ 
      reply: fallbackReply 
    });
  }
}

// Fallback function for travel responses
function generateTravelResponse(userMessage) {
  if (!userMessage) {
    return "Hello! 👋 I'm your OPO Travels assistant! How can I help you with your travel plans today?";
  }
  
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! 👋 I'm your OPO Travels assistant! How can I help you with your travel plans today?";
  }
  
  if (message.includes('destination') || message.includes('place') || message.includes('where')) {
    return "We offer amazing destinations! 🗺️ Popular choices include:\n• Kerala for backwaters\n• Goa for beaches\n• Rajasthan for culture\n• Himachal for mountains\n\nWhich type of experience are you looking for?";
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
    return "💰 Travel costs vary based on destination, season, and package type. For exact pricing, I recommend checking our website or contacting our travel specialists at +91-77550-47316 for a customized quote!";
  }
  
  if (message.includes('hotel') || message.includes('stay') || message.includes('accommodation')) {
    return "🏨 We partner with the best hotels worldwide! From luxury resorts to budget stays, we have options for every preference. Tell me your destination and budget, and I'll suggest perfect accommodations!";
  }
  
  if (message.includes('flight') || message.includes('airline') || message.includes('travel')) {
    return "✈️ We can help you find the best flight deals! For real-time flight options and bookings, visit our Flight section or let me know your travel dates and destinations.";
  }
  
  if (message.includes('package') || message.includes('tour') || message.includes('itinerary')) {
    return "📦 We have curated travel packages for every type of traveler! Whether you're looking for adventure, relaxation, culture, or family fun, we can create the perfect itinerary. What are your travel preferences?";
  }
  
  if (message.includes('book') || message.includes('reservation') || message.includes('buy')) {
    return "🎉 Great! To make a booking, you can:\n1. Visit our website for instant booking\n2. Use our Trip Planner tool\n3. Contact our travel experts at +91-77550-47316\n4. Chat with us on WhatsApp for personalized service";
  }
  
  if (message.includes('contact') || message.includes('call') || message.includes('number')) {
    return "📞 You can reach us at:\n• WhatsApp: +91-77550-47316\n• Email: info@opotravels.com\n• Office hours: 24/7\n\nWe're here to help you plan your perfect trip!";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! 😊 Happy to help with your travel plans. Let me know if you need anything else!";
  }
  
  // Default response for other queries
  return "I'd love to help you with your travel plans! 🌍 For detailed information about destinations, bookings, or travel advice, please visit our website or contact our travel experts at +91-77550-47316 for personalized assistance.";
}