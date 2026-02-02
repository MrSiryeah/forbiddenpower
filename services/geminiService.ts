
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches hobby advice from the Gemini API.
 * Initialization happens inside the function to ensure the API key 
 * is retrieved fresh from the environment and to prevent top-level 
 * ReferenceErrors in browser environments.
 */
export const getHobbyAdvice = async (userInterest: string) => {
  // Use a fallback empty string for the API key to prevent SDK constructor errors
  const apiKey = (process.env.API_KEY as string) || '';
  
  if (!apiKey) {
    console.error("Gemini API Key is not configured.");
    return "Our hobby experts are currently busy. Please visit us in person in Msida!";
  }

  try {
    // Initialize inside the function call as per guidelines
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert hobbyist at 'Forbidden Powers', a premium hobby shop in Msida, Malta, established in 1999. A customer is asking for advice on: ${userInterest}. Give them a helpful, enthusiastic recommendation (about 3-4 sentences) that highlights why they should visit our local shop in Msida to get started. Mention our 25-year heritage and our focus on Warhammer (AoS, 40k, Old World), TCGs (Magic, One Piece), or our community events like Friday Night Magic.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Access the text property directly (not a method)
    return response.text || "Sorry, I couldn't generate advice right now. Why not drop by the shop?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our hobby experts are currently busy. Please visit us in person in Msida!";
  }
};
