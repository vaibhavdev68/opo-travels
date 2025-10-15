"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "👋 Hi! I'm your AI travel assistant from OPO Travels! I can help you with:\n• Destination recommendations\n• Travel planning\n• Booking information\n• Package details\n\nWhat would you like to know? 🌍" 
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const whatsappNumber = "917755047316";
  const defaultMessage = encodeURIComponent("Hello! I want to chat about travel packages and destinations.");

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Send message to AI backend
  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    
    const userInput = input.trim();
    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      if (!res.ok) throw new Error('API response not ok');
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "❌ I'm having trouble connecting right now. Please try our WhatsApp support for immediate assistance, or try again later." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "Best destinations?",
    "Travel packages",
    "Flight booking",
    "Hotel options"
  ];

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-2xl text-2xl z-50 transition-all duration-300 hover:scale-110"
      >
        💬
        {!menuOpen && !chatOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        )}
      </button>

      {/* Menu Buttons Popup */}
      {menuOpen && (
        <div className="fixed bottom-20 right-6 flex flex-col gap-3 z-50 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200 min-w-[200px]">
          {/* Cancel Icon */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-gray-500 hover:text-gray-700 font-bold text-sm"
          >
            ✖
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={() => {
              setChatOpen(true);
              setMenuOpen(false);
            }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-5 py-3 rounded-xl shadow-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            🤖 AI Assistant
          </button>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
          >
            📱 WhatsApp
          </a>
        </div>
      )}

      {/* AI Assistant Popup */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border-t-4 border-purple-500">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 font-semibold flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>OPO Travel Assistant</span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors duration-200 w-8 h-8 flex items-center justify-center"
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-purple-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-none border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="text-xs text-gray-500 mb-2">Quick questions:</div>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInput(question);
                      setTimeout(sendMessage, 100);
                    }}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about travel destinations, packages..."
                className="flex-1 p-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white p-3 rounded-xl transition-all duration-300 disabled:cursor-not-allowed"
              >
                {loading ? "⏳" : "➤"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}