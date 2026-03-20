import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_INSTRUCTION = `
You are a polite and professional pre-screening assistant for IT Handyman SF.

Your only job is to understand the client's problem, confirm it fits one of the services below, and ask them to fill out the booking form.

YOU ONLY COVER THESE 4 SERVICES — nothing else:

1. Broken Tech Fix (remote only)
   Covers: broken or slow SOFTWARE, app crashes, software conflicts, SaaS configuration, email client issues.
   Does NOT cover: hardware repair, physical computer performance upgrades, RAM/storage, printers, phones, TVs, or any device that needs to be physically touched.

2. AI Setup for Real Work
   Covers: custom GPTs, AI assistants, n8n workflows, business automation, internal tools, AI-powered document or data workflows.
   Does NOT cover: AI theory, courses, consulting without implementation, or enterprise systems.

3. Email & Chat Automation
   Covers: automatic email responses, AI email triage, smart replies, live chat bots for websites, lead qualification bots.
   Does NOT cover: manual email management, CRM setup unrelated to automation, or marketing campaigns.

4. Website & Online Tool Fixes
   Covers: broken forms, failed integrations, misconfigured dashboards, online tool configuration issues.
   Does NOT cover: building websites from scratch, design work, content creation, or SEO.

5. Social Media Automation
   Covers: automatic post generation and scheduling for Instagram, TikTok, YouTube Shorts, Twitter/X, and LinkedIn using AI. Keeps feeds active without daily manual work.
   Does NOT cover: content strategy, photography, video production, or paid ads management.

BEHAVIOR RULES:
- Always be polite, calm, and friendly. Never be dismissive.
- Ask only what is needed to confirm the service fits — maximum 3 clarifying questions.
- If the request clearly fits one of the 4 services, say so briefly and ask the client to fill out the booking form below.
- If the request does NOT fit any service, say exactly: "That's outside what we handle, but I appreciate you reaching out." Then stop. Do NOT add anything else. Do NOT suggest alternatives. Do NOT mention related services. Do NOT say "however" or "but if".
- Never try to solve the problem. Never give technical advice. Your only goal is to qualify and direct to the form.
- After confirming a fit, always end with: "Please go ahead and fill out the booking form below — we'll get back to you within 4 business hours."
`;

const SERVICE_ICONS: Record<string, string> = {
  "Broken Tech Fix": "🔧",
  "AI Setup for Real Work": "🤖",
  "Email & Chat Automation": "✉️",
  "Website & Online Tool Fixes": "🌐",
  "Social Media Automation": "📱",
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm your IT & AI Handyman assistant. What's not working or slowing you down right now?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [closed, setClosed] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  // Show services after a short delay on load
  useEffect(() => {
    const timer = setTimeout(() => setServicesVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || loading || closed) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    inputRef.current?.focus();
    setAttempts((prev) => prev + 1);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: SYSTEM_INSTRUCTION,
          messages: updatedMessages,
        }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.content || "I do not offer that service.",
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);

      if (attempts + 1 >= 5) {
        setClosed(true);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "That's all I need to assess this. If this fits what I offer, please use the Book Now button above.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I couldn't process this request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center px-4 py-12">
      {/* Hero */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-center">
        How can we help today?
      </h1>
      <p className="text-sm text-zinc-500 mb-8 text-center">
        SF & Bay Area — Remote IT & AI Concierge
      </p>

      {/* Chat */}
      <div className="w-full max-w-xl border border-zinc-200 rounded-2xl p-4 space-y-4 bg-white shadow-sm">
        <div
          ref={messagesContainerRef}
          className="space-y-3 max-h-72 overflow-y-auto"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`text-sm px-3 py-2 rounded-xl w-fit max-w-[85%] ${
                msg.role === "assistant"
                  ? "bg-zinc-100 text-zinc-900"
                  : "bg-zinc-900 text-white ml-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="text-sm px-3 py-2 rounded-xl bg-zinc-100 text-zinc-400 w-fit animate-pulse">
              Thinking…
            </div>
          )}
        </div>

        {!closed ? (
          <div className="flex gap-2 pt-1">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Describe your issue..."
              className="flex-1 border border-zinc-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm disabled:opacity-50"
            >
              Send
            </button>
          </div>
        ) : (
          <div className="text-center pt-2">
            <Link
              to="/book"
              className="inline-block bg-zinc-900 text-white px-6 py-2 rounded-xl text-sm font-medium"
            >
              Book Now →
            </Link>
          </div>
        )}
      </div>

      {/* Services — animate in after load */}
      <div
        ref={servicesRef}
        className={`w-full max-w-xl mt-10 transition-all duration-700 ease-out ${
          servicesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs text-zinc-400 uppercase tracking-widest mb-4 text-center">
          What we do
        </p>
        <div className="grid grid-cols-1 gap-3">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200 rounded-xl px-4 py-3 flex items-start gap-3"
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: servicesVisible ? 1 : 0,
                transform: servicesVisible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${idx * 100}ms, transform 0.5s ease ${idx * 100}ms`,
              }}
            >
              <span className="text-xl mt-0.5">
                {SERVICE_ICONS[service.title] ?? "⚙️"}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-900">{service.title}</p>
                <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">
                  {service.description}
                </p>
                <div className="flex gap-3 mt-2">
                  <span className="text-xs text-zinc-400">{service.estimatedHours}</span>
                  <span className="text-xs font-medium text-zinc-700">{service.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/book"
            className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </main>
  );
}
