import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: ".env.local" });
dotenv.config(); // fallback to .env

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY,
});

app.post("/api/assistant", async (req, res) => {
  try {
    const { messages, systemInstruction } = req.body;

    if (!process.env.OPENAI_API_KEY && !process.env.VITE_OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is missing");
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages: [
        { role: "system", content: systemInstruction },
        ...messages,
      ],
    });

    res.json({
      content: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(3001, () => {
  console.log("✅ API running on http://localhost:3001");
});
