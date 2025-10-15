import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { messages } = await request.json();
    
    // Get the latest user message
    const userMessage = messages[messages.length - 1].content;
    
    // You can integrate with various AI services:
    
    // Option 1: OpenAI GPT
    // const response = await fetch('https://api.openai.com/v1/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'system',
    //         content: 'You are a helpful travel assistant for OPO Travels. Help users with travel planning, destinations, bookings, and travel advice. Keep responses friendly and informative.'
    //       },
    //       ...messages.map(msg => ({
    //         role: msg.role,
    //         content: msg.content
    //       }))
    //     ],
    //     max_tokens: 500
    //   })
    // });
    // const data = await response.json();
    // const reply = data.choices[0].message.content;

    // Option 2: Custom travel-focused responses (temporary solution)
    const reply = generateTravelResponse(userMessage);
    
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "I'm having trouble connecting right now. Please try again later or contact us directly." },
      { status: 500 }
    );
  }
}

// Temporary function for travel responses until you integrate with a real AI service
function generateTravelResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! 👋 I'm your OPO Travels assistant! How can I help you with your travel plans today?";
  }
  
  if (message.includes('destination') || message.includes('place') || message.includes('where')) {
    return "We offer amazing destinations! 🗺️ Popular choices include:\n• Kerala for backwaters\n• Goa for beaches\n• Rajasthan for culture\n• Himachal for mountains\n\nWhich type of experience are you looking for?";
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
    return "💰 Travel costs vary based on destination, season, and package type. For exact pricing, I recommend checking our website or contacting our travel specialists who can create a customized quote for you!";
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
    return "🎉 Great! To make a booking, you can:\n1. Visit our website for instant booking\n2. Use our Trip Planner tool\n3. Contact our travel experts directly\n4. Chat with us on WhatsApp for personalized service\n\nHow would you like to proceed?";
  }
  
  if (message.includes('contact') || message.includes('call') || message.includes('number')) {
    return "📞 You can reach us at:\n• Phone: +91-XXXXX-XXXXX\n• WhatsApp: +91-77550-47316\n• Email: info@opotravels.com\n• Office: [Your office address]\n\nWe're here to help 24/7!";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! 😊 Happy to help with your travel plans. Let me know if you need anything else!";
  }
  
  // Default response for other queries
  return "I'd love to help you with your travel plans! 🌍 For detailed information about destinations, bookings, or travel advice, please visit our website or contact our travel experts who can provide personalized assistance. Is there anything specific about travel I can help you with?";
}