
import React, { useState, FormEvent } from 'react';
import { type ImageGenerationOptions, type AspectRatio } from '../types';
import SparklesIcon from './icons/SparklesIcon';

interface ImageGeneratorFormProps {
  onGenerate: (options: ImageGenerationOptions) => void;
  isLoading: boolean;
}

const aspectRatios: AspectRatio[] = ["1:1", "16:9", "9:16", "4:3", "3:4"];
const imageCountOptions = [1, 2, 3, 4];

const ImageGeneratorForm: React.FC<ImageGeneratorFormProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState<string>('A photorealistic image of a futuristic city skyline at dusk, with flying cars and neon lights.');
  const [numberOfImages, setNumberOfImages] = useState<number>(2);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    onGenerate({ prompt, numberOfImages, aspectRatio });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
          Your Prompt
        </label>
        <textarea
          id="prompt"
          rows={5}
          className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200 resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A majestic lion wearing a crown in a fantasy forest"
          required
        />
      </div>

      <div>
        <label htmlFor="numberOfImages" className="block text-sm font-medium text-gray-300 mb-2">
          Number of Images
        </label>
        <div className="grid grid-cols-4 gap-2">
          {imageCountOptions.map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setNumberOfImages(count)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-primary ${
                numberOfImages === count ? 'bg-brand-primary text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="aspectRatio" className="block text-sm font-medium text-gray-300 mb-2">
          Aspect Ratio
        </label>
         <div className="grid grid-cols-3 gap-2">
          {aspectRatios.map((ratio) => (
            <button
              key={ratio}
              type="button"
              onClick={() => setAspectRatio(ratio)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-primary ${
                aspectRatio === ratio ? 'bg-brand-primary text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              }`}
            >
              {ratio}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300 shadow-lg"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5"/>
            Generate
          </>
        )}
      </button>
    </form>
  );
};

export default ImageGeneratorForm;
