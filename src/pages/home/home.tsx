'use client'

import { LetterButton } from '@/components/letter-button';
import { pathConfig } from '@/lib/settings.config';
import { useState, useEffect } from 'react';

export default function Home() {
  const [displayedText1, setDisplayedText1] = useState<string>('');
  const [displayedText2, setDisplayedText2] = useState<string>('');
  const [showCursor1, setShowCursor1] = useState<boolean>(true);
  const [showCursorFinished, setShowCursorFinished] = useState<boolean>(true);
 const [activeKey, setActiveKey] = useState<string | null>(null);

  const sizes = {
    sm: "min-w-[2rem]",
    md: "min-w-[3rem]",
    lg_sm: "min-w-[3.35rem]",
    lg: "min-w-[5.35rem]",
    xl_sm: "min-w-[6.85rem]",
    xl: "min-w-[7.05rem]",
    hg: "min-w-[15.3rem]"
  };

  const text1 = 'Hello World!';
  const text2 = 'Carlos Ian Rodrigues dos Santos';
  const keyboard = [
    [{ key: '`', size: sizes.sm }, { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '0' }, { key: '-' }, { key: '=' }, { key: 'Backspace', size: sizes.lg }],
    [{ key: 'Tab', size: sizes.lg }, { key: 'Q' }, { key: 'W' }, { key: 'E' }, { key: 'R' }, { key: 'T' }, { key: 'Y' }, { key: 'U' }, { key: 'I' }, { key: 'O' }, { key: 'P' }, { key: '[', size: sizes.md }, { key: ']', size: sizes.md }, { key: '\\', size: sizes.md }],
    [{ key: 'CapsLock', size: sizes.lg }, { key: 'A' }, { key: 'S' }, { key: 'D' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'J' }, { key: 'K' }, { key: 'L' }, { key: ';' }, { key: '\'' }, { key: 'Enter', size: sizes.xl_sm }],
    [{ key: 'Shift', size: sizes.xl }, { key: 'Z' }, { key: 'X' }, { key: 'C' }, { key: 'V' }, { key: 'B' }, { key: 'N' }, { key: 'M' }, { key: ',', size: sizes.lg_sm }, { key: '.', size: sizes.lg_sm }, { key: '/', size: sizes.lg_sm }, { key: 'Shift', size: sizes.xl }],
    [{ key: 'Ctrl', size: sizes.lg }, { key: 'Win', size: sizes.lg }, { key: 'Alt', size: sizes.lg }, { key: 'Space', size: sizes.hg }, { key: 'Alt', size: sizes.lg }, { key: 'Menu', size: sizes.lg }, { key: 'Ctrl', size: sizes.lg }]
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      const char = text1[index]
      if (index <= text1.length) {
        setDisplayedText1(text1.slice(0, index));

        if (char && char !== ' ') setActiveKey(char.toUpperCase());
        if (char === ' ') setActiveKey('SPACE');
        if (char === '!') setActiveKey('SHIFT');
        
        setTimeout(() => setActiveKey(null), 100);
        
        index++;
      } else {
        clearInterval(timer);
        setShowCursorFinished(false);
        
        let index2 = 0;
        const timer2 = setInterval(() => {
          const char2 = text2[index2]
          if (index2 <= text2.length) {
            setDisplayedText2(text2.slice(0, index2));

            if (char2 && char2 !== ' ') setActiveKey(char2.toUpperCase())
            if (char2 === ' ') setActiveKey('SPACE')

            setTimeout(() => setActiveKey(null), 100);

            index2++;
          } else {
            clearInterval(timer2);
          }
        }, 120);
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
      style={{ backgroundImage: `url('${pathConfig.basePath}/bg.png')` }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="flex flex-col items-center w-full z-10 -mt-28 md:-mt-16">
        <div className="scale-[35%] md:scale-75 origin-center">
          <div className="relative w-full max-w-[53rem]" style={{ perspective: '1000px' }}>
            <div className='bg-gradient-to-tl from-gray-300 to-gray-200 border-4 border-black pt-[8px] rounded-2xl'>
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              <div 
                className="relative"
                style={{ 
                  transform: 'rotateX(-5deg)',
                  transformOrigin: 'bottom center'
                }}
              >
                <div className="relative bg-gradient-to-b from-gray-100 to-gray-300 rounded-2xl p-3 shadow-2xl">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-950 rounded-full border border-gray-700 z-20"></div>
                  
                  <div className="relative bg-black rounded-xl overflow-hidden shadow-inner">
                    <div className="relative bg-gradient-to-br from-gray-950 via-gray-700 to-gray-600 p-12 min-h-[450px] flex flex-col justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                      
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                        }}
                      ></div>
                      
                      <div className="relative font-mono leading-tight drop-shadow-xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cyan-100">
                          {displayedText1}
                          {displayedText1.length > 0 && showCursor1 && showCursorFinished && <span>|</span>}
                        </h1>
                        
                        <h2 className="text-2xl md:text-3xl text-gray-100">
                          {displayedText2}
                          {displayedText2.length > 0 && showCursor1 && <span>|</span>}
                        </h2>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>          
            </div>
            </div>
          </div>

          <div className="flex -mt-2 py-2 items-center justify-center rounded-2xl">
            <div className='bg-gradient-to-tl from-gray-300 to-gray-100 border-4 border-black pb-[15px] rounded-2xl'>
              <div className="flex flex-col items-center justify-center bg-gray-200 border-4 border-white p-1 rounded-2xl">
                {keyboard.map((line, lineIndex) => (
                  <div key={lineIndex} className="flex bg-gradient-to-b from-gray-600 via-gray-200 to-gray-600">
                    {line.map((key, keyIndex) => 
                      <LetterButton key={keyIndex} char={key.key} size={key.size} active={key.key.toUpperCase() == activeKey} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}