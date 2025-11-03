
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ImageGeneratorForm from './components/ImageGeneratorForm';
import ImageDisplay from './components/ImageDisplay';
import { generateImagesFromApi } from './services/geminiService';
import { type ImageGenerationOptions, type GeneratedImage } from './types';

const App: React.FC = () => {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (options: ImageGenerationOptions) => {
    setIsLoading(true);
    setError(null);
    setImages([]);
    try {
      const generatedImages = await generateImagesFromApi(options);
      setImages(generatedImages);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      console.error(errorMessage);
      setError(`Failed to generate images. Please try again. Details: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Header />
        <main className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-8 bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-md">
                 <ImageGeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />
              </div>
            </div>
            <div className="lg:col-span-8 xl:col-span-9">
              <ImageDisplay images={images} isLoading={isLoading} error={error} />
            </div>
          </div>
        </main>
      </div>
       <footer className="w-full text-center p-4 mt-auto">
        <p className="text-gray-500 text-sm">Powered by Google Gemini</p>
      </footer>
    </div>
  );
};

export default App;
