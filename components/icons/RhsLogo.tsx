import React from 'react';

// A simplified SVG representation of the Ricardo Home Solutions logo.
const RhsLogo: React.FC = () => {
    return (
        <svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
            <style>
                {`.rhs-text { font-family: 'Montserrat', sans-serif; font-weight: 900; }`}
            </style>
            <g>
                {/* Hexagon Outline */}
                <path d="M80 5 L155 45 V 95 L80 135 L5 95 V 45 Z" fill="#2E5339" />
                
                {/* Simplified Tree */}
                <path d="M80, 25 L65, 50 L95, 50 Z" fill="#6B8E23" />
                <rect x="76" y="50" width="8" height="15" fill="#5D4037" />

                {/* RHS Text - stylized */}
                <text 
                    x="80" 
                    y="100" 
                    fontSize="50" 
                    fill="#FFFFFF" 
                    textAnchor="middle" 
                    className="rhs-text"
                >
                    RHS
                </text>

                {/* Simplified Fence Swoosh */}
                <path d="M40 105 C 70 125, 90 125, 120 105" stroke="#B88A58" strokeWidth="6" fill="none" />
            </g>
        </svg>
    );
};

export default RhsLogo;