'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursorFinished, setShowCursorFinished] = useState(true);
  
  const text1 = 'Hello World!';
  const text2 = 'Carlos Ian Rodrigues dos Santos';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text1.length) {
        setDisplayedText1(text1.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursorFinished(false);
        
        let index2 = 0;
        const timer2 = setInterval(() => {
          if (index2 <= text2.length) {
            setDisplayedText2(text2.slice(0, index2));
            index2++;
          } else {
            clearInterval(timer2);
          }
        }, 100);
      }
    }, 120);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      if (showCursor1) setShowCursor1(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center min-h-[900px] bg-no-repeat bg-center px-6 -mt-10 bg-cover md:bg-[length:100%_auto]"
      style={{ backgroundImage: "url('/Portfolio/bg.png')" }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="relative w-full mx-auto max-w-6xl z-10">
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
          }}
        ></div>
        
        <div className="relative font-mono leading-tight drop-shadow-xl -mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cyan-100">
            {displayedText1}
            {displayedText1.length > 0 && showCursor1 && showCursorFinished && <span>|</span>}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-100">
            {displayedText2}
            {displayedText2.length > 0 && showCursor1 && <span>|</span>}
          </h2>
        </div>
      </div>
    </div>
  );
}