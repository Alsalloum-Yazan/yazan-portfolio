import React, { useRef, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { gsap } from 'gsap';

const Hero = () => {
    const textRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        // GSAP animation for text fade-in effect
        gsap.from(textRef.current, { opacity: 0, duration: 1.5 });
    }, []);

    return (
        <div>
            <Canvas ref={canvasRef}>
                {/* 3D content goes here */}
            </Canvas>
            <h1 ref={textRef}>Welcome to My Portfolio</h1>
            <button onClick={() => alert('Engage with me!')}>Contact Me</button>
        </div>
    );
};

export default Hero;