/// <reference types="react-scripts" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_API_URL: string;
  }
}

declare namespace React {
  interface SyntheticEvent<T = Element> {
    currentTarget: T;
    target: EventTarget;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 