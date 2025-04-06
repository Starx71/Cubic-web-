declare module 'framer-motion' {
  import { ReactElement, ReactNode, CSSProperties } from 'react';
  
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
  }
  
  export interface AnimatePresenceProps {
    children: ReactNode;
    [key: string]: any;
  }
  
  export const motion: {
    [key: string]: (props: MotionProps) => ReactElement;
  };
  
  export const AnimatePresence: (props: AnimatePresenceProps) => ReactElement;
} 