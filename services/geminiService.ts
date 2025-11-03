
import { GoogleGenAI } from "@google/genai";
import { type ImageGenerationOptions, type GeneratedImage } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateImagesFromApi = async (options: ImageGenerationOptions): Promise<GeneratedImage[]> => {
    const { prompt, numberOfImages, aspectRatio } = options;

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt,
            config: {
                numberOfImages,
                outputMimeType: 'image/jpeg',
                aspectRatio,
            },
        });
        
        if (!response.generatedImages || response.generatedImages.length === 0) {
            throw new Error("API returned no images.");
        }

        return response.generatedImages.map((img, index) => {
            const base64ImageBytes: string = img.image.imageBytes;
            return {
                src: `data:image/jpeg;base64,${base64ImageBytes}`,
                alt: `${prompt} - Image ${index + 1}`
            };
        });

    } catch (error) {
        console.error("Error generating images with Gemini API:", error);
        throw new Error("Failed to communicate with the image generation service.");
    }
};
