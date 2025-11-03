
import React from 'react';

const loadingMessages = [
  "Warming up the digital canvas...",
  "Mixing the color palette...",
  "Consulting the muses of creation...",
  "Translating imagination into pixels...",
  "Crafting your visual masterpiece...",
  "Finalizing the details...",
];

const Spinner: React.FC = () => {
    const [message, setMessage] = React.useState(loadingMessages[0]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMessage(prevMessage => {
                const currentIndex = loadingMessages.indexOf(prevMessage);
                const nextIndex = (currentIndex + 1) % loadingMessages.length;
                return loadingMessages[nextIndex];
            });
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-brand-primary border-l-brand-primary rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-semibold text-gray-300 transition-opacity duration-500">{message}</p>
        </div>
    );
};

export default Spinner;
