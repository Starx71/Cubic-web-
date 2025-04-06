// This file extends the official React types with additional properties
// that might be missing in the current version

import 'react';

declare module 'react' {
  // Add displayName to components
  interface FunctionComponent<P = {}> {
    displayName?: string;
  }
  
  // Add displayName to forwardRef components
  interface ForwardRefExoticComponent<P> {
    displayName?: string;
  }
  
  // Add displayName to memo components
  interface MemoExoticComponent<T extends ComponentType<any>> {
    displayName?: string;
  }
  
  // Add displayName to lazy components
  interface LazyExoticComponent<T extends ComponentType<any>> {
    displayName?: string;
  }
} 