

"use client";
import { useState } from "react";

export default function ChatBot() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Hi! I’m your AI travel assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const whatsappNumber = "917755047316" // Replace with your number
  const defaultMessage = encodeURIComponent("Hello! I want to chat about travel.");

  // Send message to AI backend
  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "❌ Error: Unable to get AI response." }]);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-xl text-2xl z-50 transition-all duration-300"
      >
        💬
      </button>

      {/* Menu Buttons Popup */}
      {menuOpen && (
        <div className="fixed bottom-20 right-6 flex flex-col gap-3 z-50 bg-white p-3 rounded-xl shadow-lg border border-gray-200">
          {/* Cancel Icon */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-gray-600 hover:text-gray-800 font-bold"
          >
            ✖
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg font-semibold transition-all duration-300"
          >
            💻 AI Assistant
          </button>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-center transition-all duration-300"
          >
            📱 Chat on WhatsApp
          </a>
        </div>
      )}

      {/* AI Assistant Popup */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 w-[28rem] md:w-[32rem] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border-t-4 border-blue-500">
          {/* Header */}
          <div className="bg-blue-500 text-white p-3 font-semibold flex justify-between items-center">
            AI Travel Assistant
            <button
              onClick={() => setChatOpen(false)}
              className="font-bold hover:bg-blue-600 rounded-full p-1 transition-colors duration-200"
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2 border-t flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about trips..."
              className="flex-1 p-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 rounded-lg transition-all duration-300"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
