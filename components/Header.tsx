
import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="text-center animate-fade-in">
      <div className="inline-flex items-center gap-4">
        <SparklesIcon className="w-10 h-10 text-brand-primary" />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-light text-transparent bg-clip-text">
          Gemini Image Generator
        </h1>
        <SparklesIcon className="w-10 h-10 text-brand-secondary" />
      </div>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Bring your ideas to life. Describe anything you can imagine, and let Imagen 4 create stunning, high-quality visuals in seconds.
      </p>
    </header>
  );
};

export default Header;
