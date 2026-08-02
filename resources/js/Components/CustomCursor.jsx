import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || 
                e.target.closest('a, button, .glass-lavender')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div 
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
}
