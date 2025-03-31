declare module 'react-typing-effect' {
  import { FC, ReactNode } from 'react';
  
  interface ReactTypingEffectProps {
    text: string | string[];
    staticText?: string;
    className?: string;
    speed?: number;
    eraseSpeed?: number;
    eraseDelay?: number;
    typingDelay?: number;
    cursor?: string;
    cursorClassName?: string;
    displayTextRenderer?: (text: string, index: number) => ReactNode;
    cursorRenderer?: (cursor: string) => ReactNode;
  }
  
  const ReactTypingEffect: FC<ReactTypingEffectProps>;
  
  export default ReactTypingEffect;
}