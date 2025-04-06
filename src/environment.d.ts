/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module 'framer-motion' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

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
    [key: string]: ComponentType<MotionProps>;
  };

  export const AnimatePresence: ComponentType<AnimatePresenceProps>;
}

declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }

  export const BrainCircuit: FC<IconProps>;
  export const Zap: FC<IconProps>;
  export const Code2: FC<IconProps>;
  export const Users: FC<IconProps>;
  export const MessageSquare: FC<IconProps>;
  export const Settings: FC<IconProps>;
  export const Mail: FC<IconProps>;
  export const Github: FC<IconProps>;
  export const Linkedin: FC<IconProps>;
  export const Twitter: FC<IconProps>;
  export const Loader2: FC<IconProps>;
  export const CheckCircle: FC<IconProps>;
  export const AlertTriangle: FC<IconProps>;
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

declare module 'react-dom' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
} 