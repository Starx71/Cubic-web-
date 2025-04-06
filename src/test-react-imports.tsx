import React, { useRef, useState, useCallback, useEffect } from 'react';
import type { ReactElement } from 'react';

export function TestComponent(): ReactElement {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  
  return (
    <div ref={ref}>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
} 