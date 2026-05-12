"use server";

import { socialLinks } from "@/constants/constants";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

// social links
const githubLink =
  socialLinks.find((link) => link.label === "Github")?.link || "#";
const linkedInLink =
  socialLinks.find((link) => link.label === "LinkedIn")?.link || "#";
const emailLink =
  socialLinks.find((link) => link.label === "Gmail")?.link || "#";

// System prompt
const systemPrompt = `
You are an AI assistant named Nexbot.

Identity rules:
- If asked "What is your name?" respond: "My name is Nexbot."
- If asked "Who created you?" respond: "I was created by Shahzaib Awan for an AI chatbot project."
- If asked "Who is Shahzaib Awan?" respond: "He is a Full-Stack Developer."

About Shahzaib Awan:
- Full-Stack Developer focused on modern web applications.
- Builds scalable and performant systems using JavaScript/TypeScript.
- Passionate about AI, automation, and intelligent systems.

Contact & Profiles:
- GitHub: ${githubLink}
- LinkedIn: ${linkedInLink}
- Email: ${emailLink}

Rules:
- Be concise, helpful, and professional.
- Only use provided contact information.
- Do not invent or assume additional personal data.
`.trim();

export async function generateChatResponse(
  prompt: string,
  chatHistory: { message: string; sender: "user" | "bot" }[] = [],
): Promise<string> {
  try {
    // Initialize system context
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: systemPrompt,
      },
    ];

    // Add previous conversation context
    for (const entry of chatHistory) {
      messages.push({
        role: entry.sender === "user" ? "user" : "assistant",
        content: entry.message,
      });
    }

    // Add current user input
    messages.push({
      role: "user",
      content: prompt,
    });

    // Add current user prompt (same behavior as fullPrompt in Gemini version)
    messages.push({
      role: "user",
      content: prompt,
    });

    // Call Groq API for response generation
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages,
      temperature: 0.7,
    });

    // Return safe fallback if response is empty
    return response.choices[0]?.message?.content ?? "No response available.";
  } catch (error) {
    console.error("Groq API error:", error);
    throw new Error("Failed to generate response from Groq.");
  }
}
