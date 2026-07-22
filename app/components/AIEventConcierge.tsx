"use client";

import React, { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  venue: string;
  guests: string;
  vision: string;
}

export default function AIEventConcierge() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Welcome to DEMM Photo Booths Atlanta. I am your event concierge. Let's design the perfect photo experience for your celebration. What type of event are we planning?",
    },
  ]);
  const [step, setStep] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [userData, setUserData] = useState<Partial<UserData>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const eventTypes = ["Wedding", "Corporate Event", "Birthday / Private Party", "Prom / School", "Gala / Nonprofit"];
  const guestRanges = ["Under 100", "100-250", "250-500", "500+"];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const simulateResponse = (replyText: string, nextStepAction?: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Math.random().toString(), sender: "ai", text: replyText },
      ]);
      if (nextStepAction) nextStepAction();
    }, 1200);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { id: Math.random().toString(), sender: "user", text }]);
    setInput("");

    // Step machine
    if (step === 0) {
      setUserData((prev) => ({ ...prev, eventType: text }));
      setStep(1);
      simulateResponse(
        `A ${text} is going to be spectacular. When is the big day? (Please specify your preferred date)`
      );
    } else if (step === 1) {
      setUserData((prev) => ({ ...prev, date: text }));
      setStep(2);
      simulateResponse(
        "Excellent. And where in Atlanta or Metro Atlanta is the event venue located?"
      );
    } else if (step === 2) {
      setUserData((prev) => ({ ...prev, venue: text }));
      setStep(3);
      simulateResponse(
        "Got it. Approximately how many guests are we expecting to celebrate with us?",
        () => setStep(3)
      );
    } else if (step === 3) {
      setUserData((prev) => ({ ...prev, guests: text }));
      setStep(4);
      simulateResponse(
        "Wonderful! Tell me a bit about your vision or theme for the event. Are you looking for custom corporate branding, elegant prints, or just pure high-energy fun?",
        () => setStep(4)
      );
    } else if (step === 4) {
      setUserData((prev) => ({ ...prev, vision: text }));
      setStep(5);
      simulateResponse(
        "That sounds incredible. To put together your custom recommendation and check our availability, what is your name and email address?"
      );
    } else if (step === 5) {
      // Parse name and email
      const parts = text.split(",");
      const name = parts[0]?.trim() || text;
      const email = parts[1]?.trim() || "";
      setUserData((prev) => ({ ...prev, name, email }));
      setStep(6);
      simulateResponse(
        `Thank you, ${name}. Based on a ${userData.eventType} at ${userData.venue} with ${userData.guests} guests, I highly recommend our **DEMM Premium Experience**. This includes a professional attendant, custom event-branded print designs, instant sharing, and studio-grade lighting to capture the energy. I've sent this custom plan and date validation to your email (${email || "your email"}). Let's get this date locked in!`
      );
    }
  };

  const handleOptionClick = (val: string) => {
    handleSend(val);
  };

  return (
    <div
      style={{
        background: "rgba(11, 32, 56, 0.6)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(99, 179, 255, 0.2)",
        borderRadius: "24px",
        padding: "24px",
        height: "550px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
        maxWidth: "600px",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "inherit",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid rgba(99, 179, 255, 0.15)",
          paddingBottom: "12px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#63b3ff",
            boxShadow: "0 0 10px #63b3ff",
          }}
        />
        <div>
          <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#fff", fontWeight: 700 }}>
            DEMM AI Concierge
          </h3>
          <span style={{ fontSize: "0.75rem", color: "#aab9cc" }}>
            Online • Designing Custom Experiences
          </span>
        </div>
      </div>

      {/* Messages area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingRight: "8px",
          marginBottom: "16px",
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              alignSelf: m.sender === "ai" ? "flex-start" : "flex-end",
              background:
                m.sender === "ai"
                  ? "rgba(41, 70, 101, 0.4)"
                  : "linear-gradient(135deg, #37a2ff, #2468e8)",
              color: m.sender === "ai" ? "#e8f5ee" : "#fff",
              padding: "12px 18px",
              borderRadius: m.sender === "ai" ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
              maxWidth: "85%",
              fontSize: "0.95rem",
              lineHeight: 1.4,
              border: m.sender === "ai" ? "1px solid rgba(99, 179, 255, 0.1)" : "none",
            }}
          >
            {m.text}
          </div>
        ))}

        {isTyping && (
          <div
            style={{
              alignSelf: "flex-start",
              background: "rgba(41, 70, 101, 0.4)",
              color: "#aab9cc",
              padding: "12px 18px",
              borderRadius: "18px 18px 18px 4px",
              fontSize: "0.95rem",
              display: "flex",
              gap: "4px",
            }}
          >
            <span style={{ animation: "pulse 1.2s infinite" }}>•</span>
            <span style={{ animation: "pulse 1.2s infinite 0.2s" }}>•</span>
            <span style={{ animation: "pulse 1.2s infinite 0.4s" }}>•</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Options */}
      {step === 0 && !isTyping && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleOptionClick(type)}
              style={{
                background: "rgba(99, 179, 255, 0.1)",
                border: "1px solid rgba(99, 179, 255, 0.3)",
                color: "#63b3ff",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {step === 3 && !isTyping && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
          {guestRanges.map((range) => (
            <button
              key={range}
              onClick={() => handleOptionClick(range)}
              style={{
                background: "rgba(99, 179, 255, 0.1)",
                border: "1px solid rgba(99, 179, 255, 0.3)",
                color: "#63b3ff",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {range}
            </button>
          ))}
        </div>
      )}

      {/* Input area */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
          placeholder={
            step === 5
              ? "Format: Your Name, your@email.com"
              : "Type your message..."
          }
          style={{
            flex: 1,
            background: "#07182b",
            border: "1px solid #375879",
            borderRadius: "14px",
            color: "#fff",
            padding: "12px 16px",
            fontSize: "0.95rem",
            outline: "none",
          }}
        />
        <button
          onClick={() => handleSend(input)}
          style={{
            background: "linear-gradient(135deg, #37a2ff, #2468e8)",
            border: "none",
            borderRadius: "14px",
            color: "#fff",
            padding: "12px 20px",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
