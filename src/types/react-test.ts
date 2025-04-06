// This file tests that TypeScript can correctly resolve React types
import React, { 
  ReactElement, 
  useRef, 
  useEffect, 
  useCallback, 
  memo, 
  forwardRef, 
  createContext, 
  useContext, 
  useId, 
  useMemo,
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ReactNode,
  ComponentProps
} from 'react';

// If this file compiles without errors, React types are correctly resolved
export const testReactTypes = () => {
  return true;
}; 