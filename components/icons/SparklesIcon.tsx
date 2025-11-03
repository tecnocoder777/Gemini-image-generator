
import React from 'react';

interface SparklesIconProps extends React.SVGProps<SVGSVGElement> {}

const SparklesIcon: React.FC<SparklesIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3L9.27 9.27L3 12l6.27 2.73L12 21l2.73-6.27L21 12l-6.27-2.73z" />
    <path d="M4.5 4.5l1.06 2.47L8 8l-2.47 1.06L4.5 11.52 3.44 9.05 1 8l2.44-.95z" />
    <path d="M16 16l1.06 2.47L19.5 19.5l-2.44.95L16 22.56l-1.06-2.47L12.5 19.5l2.44-.95z" />
  </svg>
);

export default SparklesIcon;
