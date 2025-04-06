// This file extends the official React types
// It adds missing properties that may be needed in your project

import * as React from 'react';

declare module 'react' {
  // Add displayName to component types if it's missing
  interface FunctionComponent<P = {}> {
    displayName?: string;
  }
  
  interface ForwardRefExoticComponent<P> {
    displayName?: string;
  }
  
  interface MemoExoticComponent<T> {
    displayName?: string;
  }
  
  interface LazyExoticComponent<T> {
    displayName?: string;
  }
} 