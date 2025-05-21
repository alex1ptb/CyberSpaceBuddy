import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_TEXT_MODEL } from "../constants";

// API Key MUST be set in the environment variables
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn(
    "Gemini API Key is missing. Please set the API_KEY environment variable. AI features will be disabled or will not work."
  );
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "MISSING_API_KEY" }); // Provide a fallback to prevent crash if API_KEY is undefined

export const generateContent = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error(
      "API Key not configured. Please contact the administrator."
    );
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: prompt,
    });

    // Direct text extraction as per guidelines
    const text = response.text;
    if (typeof text !== "string") {
      console.error("Unexpected response format from Gemini API:", response);
      throw new Error("Received an unexpected response format from the AI.");
    }
    return text;
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    if (error.message && error.message.includes("API key not valid")) {
      throw new Error(
        "The configured API key is invalid. Please contact the administrator."
      );
    }
    throw new Error(
      error.message ||
        "An unknown error occurred while communicating with the AI."
    );
  }
};

// Example for future use: Generating content with image (ensure base64 string and mimeType are correct)
/*
export const generateContentWithImage = async (promptText: string, base64ImageData: string, mimeType: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error("API Key not configured. Please contact the administrator.");
  }
  try {
    const imagePart = {
      inlineData: {
        mimeType: mimeType, // e.g., 'image/png', 'image/jpeg'
        data: base64ImageData,
      },
    };
    const textPart = {
      text: promptText,
    };

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_TEXT_MODEL, // Or a vision-capable model if specified
        contents: { parts: [textPart, imagePart] },
    });
    
    const text = response.text;
     if (typeof text !== 'string') {
        console.error("Unexpected response format from Gemini API:", response);
        throw new Error("Received an unexpected response format from the AI.");
    }
    return text;

  } catch (error: any) {
    console.error("Error calling Gemini API with image:", error);
    throw new Error(error.message || "An unknown error occurred while communicating with the AI.");
  }
};
*/

// Example for parsing JSON (if responseMimeType: "application/json" is used)
/*
export const generateJsonContent = async <T,>(prompt: string): Promise<T> => {
  if (!API_KEY) {
    throw new Error("API Key not configured. Please contact the administrator.");
  }
  try {
    const response = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    return JSON.parse(jsonStr) as T;

  } catch (error: any) {
    console.error("Error calling Gemini API for JSON:", error);
    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse JSON response from AI.");
    }
    throw new Error(error.message || "An unknown error occurred while communicating with the AI for JSON data.");
  }
};
*/
