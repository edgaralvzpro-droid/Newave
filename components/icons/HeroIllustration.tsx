import React from 'react';

const HeroIllustration: React.FC = () => (
    <div className="relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
            {/* Base shapes with gradients */}
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#dbeafe', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#bfdbfe', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            {/* Abstract representation of a bar chart for growth */}
            <rect x="50" y="250" width="60" height="100" rx="8" fill="url(#grad1)" transform="rotate(180 80 300)"/>
            <rect x="130" y="200" width="60" height="150" rx="8" fill="url(#grad1)" transform="rotate(180 160 275)"/>
            <rect x="210" y="150" width="60" height="200" rx="8" fill="url(#grad2)" transform="rotate(180 240 250)"/>
            <rect x="290" y="100" width="60" height="250" rx="8" fill="url(#grad1)" transform="rotate(180 320 225)"/>
            
            {/* Floating UI elements */}
            <circle cx="70" cy="80" r="25" fill="#2563eb" opacity="0.8" />
            <circle cx="340" cy="350" r="15" fill="#93c5fd" />

            {/* Connecting lines */}
            <path d="M 80 80 Q 180 20, 230 150" stroke="#d1d5db" strokeWidth="3" fill="none" strokeDasharray="5,5" />
            <path d="M 240 150 Q 350 220, 330 340" stroke="#d1d5db" strokeWidth="3" fill="none" strokeDasharray="5,5" />
        </svg>
    </div>
);

export default HeroIllustration;
