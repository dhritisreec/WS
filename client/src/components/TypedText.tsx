import { useState, useEffect } from 'react';

interface TypedTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypedText = ({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: TypedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  
  useEffect(() => {
    const text = texts[currentIndex];
    
    if (phase === 'typing') {
      if (displayText === text) {
        setTimeout(() => setPhase('pausing'), pauseTime);
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } 
    
    if (phase === 'pausing') {
      setTimeout(() => setPhase('deleting'), pauseTime);
    }
    
    if (phase === 'deleting') {
      if (displayText === '') {
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setPhase('typing');
        return;
      }
      
      const timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, deletingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, phase, texts, typingSpeed, deletingSpeed, pauseTime]);
  
  return (
    <div className={className}>
      {displayText}
      <span className="inline-block w-[2px] h-[1em] bg-primary animate-pulse ml-1"></span>
    </div>
  );
};

export default TypedText;