import React from 'react';

export default function SealLogo({ className = "", size = 120 }: { className?: string, size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Text Paths */}
        <path id="top-text-path" d="M 24 100 A 76 76 0 0 1 176 100" />
        <path id="bottom-text-path" d="M 176 100 A 76 76 0 0 1 24 100" />
        
        {/* Mask to carve out the veins inside the kidneys */}
        <mask id="kidney-veins-mask">
          {/* White = Keep, Black = Cut out */}
          <rect x="0" y="0" width="200" height="200" fill="white" />
          
          {/* Left Kidney Veins */}
          <path d="M 90 90 C 80 90, 70 85, 60 70" stroke="black" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 90 90 C 80 90, 70 95, 60 110" stroke="black" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 75 88 C 70 88, 65 90, 55 90" stroke="black" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          
          {/* Right Kidney Veins */}
          <path d="M 110 90 C 120 90, 130 85, 140 70" stroke="black" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 110 90 C 120 90, 130 95, 140 110" stroke="black" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 125 88 C 130 88, 135 90, 145 90" stroke="black" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </mask>
      </defs>

      {/* Outer Ring */}
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="3" />
      
      {/* Inner Ring */}
      <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1.5" />

      {/* Circular Text */}
      <text fill="currentColor" fontSize="10.5" fontWeight="800" letterSpacing="3.5" className="uppercase font-sans">
        <textPath href="#top-text-path" startOffset="50%" textAnchor="middle">
          Center For Kidney Diseases And Urology
        </textPath>
      </text>
      
      <text fill="currentColor" fontSize="10.5" fontWeight="800" letterSpacing="3.5" className="uppercase font-sans">
        <textPath href="#bottom-text-path" startOffset="50%" textAnchor="middle">
          Center For Kidney Diseases And Urology
        </textPath>
      </text>

      {/* Stars at the equator */}
      <g transform="translate(14.5, 100) scale(0.45)" fill="currentColor">
        <polygon points="0,-10 3,-3 10,-3 4,2 6,9 0,5 -6,9 -4,2 -10,-3 -3,-3" />
      </g>
      <g transform="translate(185.5, 100) scale(0.45)" fill="currentColor">
        <polygon points="0,-10 3,-3 10,-3 4,2 6,9 0,5 -6,9 -4,2 -10,-3 -3,-3" />
      </g>

      {/* Kidneys Body with Vein Mask */}
      <g mask="url(#kidney-veins-mask)" fill="currentColor">
        {/* Left Kidney Bean */}
        <path d="M 82 65 C 80 45, 55 40, 45 55 C 30 75, 30 105, 45 120 C 60 135, 75 125, 85 110 C 90 100, 78 95, 78 90 C 78 85, 90 80, 82 65 Z" />
        {/* Right Kidney Bean */}
        <path d="M 118 65 C 120 45, 145 40, 155 55 C 170 75, 170 105, 155 120 C 140 135, 125 125, 115 110 C 110 100, 122 95, 122 90 C 122 85, 110 80, 118 65 Z" />
      </g>

      {/* Ureters (Solid tubes connecting downwards from the hilum) */}
      <path d="M 88 90 L 88 135" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M 112 90 L 112 135" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
