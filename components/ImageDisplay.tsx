
import React from 'react';
import Spinner from './Spinner';
import { type GeneratedImage } from '../types';

interface ImageDisplayProps {
  images: GeneratedImage[];
  isLoading: boolean;
  error: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ images, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center text-center bg-red-900/20 border border-red-500 rounded-lg p-8 animate-fade-in">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-red-300">An Error Occurred</h3>
          <p className="mt-2 text-red-400">{error}</p>
        </div>
      );
    }

    if (images.length > 0) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <a 
                   href={image.src} 
                   download={`gemini-image-${index}.jpeg`}
                   className="text-white bg-brand-primary/80 hover:bg-brand-primary px-3 py-1 rounded-md text-sm font-medium transition-colors"
                 >
                   Download
                 </a>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center text-center bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-lg p-12 h-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-300">Your creations will appear here</h3>
        <p className="mt-2 text-gray-500">
          Fill out the form on the left and click "Generate" to start.
        </p>
      </div>
    );
  };

  return <div className="w-full min-h-[60vh] flex items-center justify-center">{renderContent()}</div>;
};

export default ImageDisplay;
