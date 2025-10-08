"use client";
import { useState } from "react";
import { ChatIcon } from "./IconComponents";
import { API_ENDPOINTS } from "../../constants/appData";

const LiveChatWidget = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async () => {
    if (!chatMessage.trim()) return;
    const userMsg = chatMessage.trim();
    setChatMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setChatMessage("");
    setIsLoading(true);

    try {
      const res = await fetch(API_ENDPOINTS.CHAT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      const reply = data.message || "Sorry, no response.";
      setChatMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Could not send your message." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showChat && (
        <div className="bg-white shadow-xl rounded-xl border p-4 w-80 mb-2">
          <div className="overflow-y-auto max-h-60 mb-2">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm mb-1 ${
                  msg.role === "user" ? "text-right" : "text-left text-pink-600"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="text-xs text-gray-400">Typing...</div>
            )}
          </div>
          <textarea
            rows={2}
            placeholder="Ask us anything..."
            className="w-full border rounded px-3 py-2 mb-2"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <button
            onClick={handleChatSubmit}
            className="bg-pink-600 text-white w-full py-2 rounded hover:bg-pink-700"
          >
            Send
          </button>
        </div>
      )}
      <button
        onClick={() => setShowChat(!showChat)}
        className="bg-pink-600 text-white px-4 py-3 rounded-full shadow hover:bg-pink-700 text-sm flex items-center gap-2"
      >
        <ChatIcon /> Ask us anything
      </button>
    </div>
  );
};

export default LiveChatWidget;
