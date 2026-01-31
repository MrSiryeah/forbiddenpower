
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables as required.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getHobbyAdvice = async (userInterest: string) => {
  try {
    // Calling generateContent with the model name and prompt directly.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert hobbyist at 'Forbidden Power', a premium hobby shop in Msida, Malta, established in 1999. A customer is asking for advice on: ${userInterest}. Give them a helpful, enthusiastic recommendation (about 3-4 sentences) that highlights why they should visit our local shop in Msida to get started. Mention our 25-year heritage and our focus on Warhammer (AoS, 40k, Old World), TCGs (Magic, One Piece), or our community events like Friday Night Magic.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Access the generated text directly using the .text property.
    return response.text || "Sorry, I couldn't generate advice right now. Why not drop by the shop?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our hobby experts are currently busy. Please visit us in person!";
  }
};
