import OpenAI from "openai";

export const config = {
  runtime: "edge",
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

/**
 * SYSTEM INSTRUCTION
 * Fonte única da verdade.
 * O frontend NÃO controla o comportamento do assistente.
 */
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

// Simple in-memory rate limiter: max 10 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 10;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { messages } = await req.json();

    // Block obvious abuse: reject if more than 8 messages in history
    if (Array.isArray(messages) && messages.length > 8) {
      return new Response(
        JSON.stringify({ error: "Session limit reached." }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        { role: "system", content: SYSTEM_INSTRUCTION },
        ...messages,
      ],
    });

    return new Response(
      JSON.stringify({
        content: completion.choices[0].message.content,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("AI ERROR:", error);
    return new Response(
      JSON.stringify({ error: "AI failed" }),
      { status: 500 }
    );
  }
}
