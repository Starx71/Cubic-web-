@echo off
echo ===== FIXING ANIMATED CUBES COMPONENT =====

echo Step 1: Creating React type definitions...
echo // This file ensures TypeScript can find all React types > src\types\react.d.ts
echo // It properly declares the React module >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo declare module 'react' { >> src\types\react.d.ts
echo   // React types >> src\types\react.d.ts
echo   export type ReactElement^<P = any, T extends string ^| JSXElementConstructor^<any^> = string ^| JSXElementConstructor^<any^>^> = { >> src\types\react.d.ts
echo     type: T; >> src\types\react.d.ts
echo     props: P; >> src\types\react.d.ts
echo     key: Key ^| null; >> src\types\react.d.ts
echo   }; >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   export type ReactNode = ReactElement ^| string ^| number ^| Iterable^<ReactNode^> ^| ReactPortal ^| boolean ^| null ^| undefined; >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   export type Key = string ^| number; >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   export type JSXElementConstructor^<P^> = ((props: P^) =^> ReactElement^<any, any^> ^| null^) ^| (new (props: P^) =^> Component^<any, any^>^); >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   export interface Component^<P = {}, S = {}^> { >> src\types\react.d.ts
echo     props: P; >> src\types\react.d.ts
echo     state: S; >> src\types\react.d.ts
echo     setState(state: S ^| ((prevState: S, props: P^) =^> S^), callback?: (^) =^> void^): void; >> src\types\react.d.ts
echo     forceUpdate(callback?: (^) =^> void^): void; >> src\types\react.d.ts
echo     render(^): ReactNode; >> src\types\react.d.ts
echo   } >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   export interface ReactPortal { >> src\types\react.d.ts
echo     key: null ^| string; >> src\types\react.d.ts
echo     children: ReactNode; >> src\types\react.d.ts
echo   } >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   // Hooks >> src\types\react.d.ts
echo   export function useState^<T^>(initialState: T ^| ((^) =^> T^)^): [T, (newState: T ^| ((prevState: T^) =^> T^)^) =^> void]; >> src\types\react.d.ts
echo   export function useEffect(effect: (^) =^> void ^| ((^) =^> void^), deps?: ReadonlyArray^<any^>^): void; >> src\types\react.d.ts
echo   export function useRef^<T^>(initialValue: T^): { current: T }; >> src\types\react.d.ts
echo   export function useCallback^<T extends (...args: any[]^) =^> any^>(callback: T, deps: ReadonlyArray^<any^>^): T; >> src\types\react.d.ts
echo   export function useMemo^<T^>(factory: (^) =^> T, deps: ReadonlyArray^<any^>^): T; >> src\types\react.d.ts
echo   export function useContext^<T^>(context: Context^<T^>^): T; >> src\types\react.d.ts
echo   export function createContext^<T^>(defaultValue: T^): Context^<T^>; >> src\types\react.d.ts
echo   export function forwardRef^<T, P = {}^>(render: (props: P, ref: React.Ref^<T^>^) =^> ReactElement ^| null^): ForwardRefExoticComponent^<P ^& { ref?: React.Ref^<T^> }^>; >> src\types\react.d.ts
echo   export function memo^<P extends object^>(Component: FunctionComponent^<P^>, propsAreEqual?: (prevProps: Readonly^<P^>, nextProps: Readonly^<P^>^) =^> boolean^): MemoExoticComponent^<FunctionComponent^<P^>^>; >> src\types\react.d.ts
echo   export function useId(^): string; >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   // Types >> src\types\react.d.ts
echo   export type FunctionComponent^<P = {}^> = (props: P^) =^> ReactElement ^| null; >> src\types\react.d.ts
echo   export type ForwardRefExoticComponent^<P^> = { >> src\types\react.d.ts
echo     (props: P^): ReactElement ^| null; >> src\types\react.d.ts
echo     displayName?: string; >> src\types\react.d.ts
echo   }; >> src\types\react.d.ts
echo   export type MemoExoticComponent^<T^> = T ^& { displayName?: string }; >> src\types\react.d.ts
echo   export type Context^<T^> = { >> src\types\react.d.ts
echo     Provider: Provider^<T^>; >> src\types\react.d.ts
echo     Consumer: Consumer^<T^>; >> src\types\react.d.ts
echo     displayName?: string; >> src\types\react.d.ts
echo     _currentValue: T; >> src\types\react.d.ts
echo   }; >> src\types\react.d.ts
echo   export type Provider^<T^> = FunctionComponent^<ProviderProps^<T^>^>; >> src\types\react.d.ts
echo   export type Consumer^<T^> = FunctionComponent^<ConsumerProps^<T^>^>; >> src\types\react.d.ts
echo   export interface ProviderProps^<T^> { >> src\types\react.d.ts
echo     value: T; >> src\types\react.d.ts
echo     children?: ReactNode; >> src\types\react.d.ts
echo   } >> src\types\react.d.ts
echo   export interface ConsumerProps^<T^> { >> src\types\react.d.ts
echo     children: (value: T^) =^> ReactNode; >> src\types\react.d.ts
echo   } >> src\types\react.d.ts
echo   export type Ref^<T^> = RefCallback^<T^> ^| RefObject^<T^> ^| null; >> src\types\react.d.ts
echo   export type RefCallback^<T^> = (instance: T ^| null^) =^> void; >> src\types\react.d.ts
echo   export interface RefObject^<T^> { >> src\types\react.d.ts
echo     current: T ^| null; >> src\types\react.d.ts
echo   } >> src\types\react.d.ts
echo. >> src\types\react.d.ts
echo   // JSX >> src\types\react.d.ts
echo   export namespace JSX { >> src\types\react.d.ts
echo     interface Element extends ReactElement^<any, any^> {} >> src\types\react.d.ts
echo     interface ElementClass extends Component^<any^> { >> src\types\react.d.ts
echo       render(^): ReactNode; >> src\types\react.d.ts
echo     } >> src\types\react.d.ts
echo     interface ElementAttributesProperty { >> src\types\react.d.ts
echo       props: {}; >> src\types\react.d.ts
echo     } >> src\types\react.d.ts
echo     interface ElementChildrenAttribute { >> src\types\react.d.ts
echo       children: {}; >> src\types\react.d.ts
echo     } >> src\types\react.d.ts
echo     interface IntrinsicAttributes extends AriaAttributes, DOMAttributes^<any^> {} >> src\types\react.d.ts
echo     interface IntrinsicClassAttributes^<T^> { >> src\types\react.d.ts
echo       ref?: Ref^<T^>; >> src\types\react.d.ts
echo     } >> src\types\react.d.ts
echo     interface IntrinsicElements { >> src\types\react.d.ts
echo       [elemName: string]: any; >> src\types\react.d.ts
echo     } >> src\types\react.d.ts
echo   } >> src\types\react.d.ts
echo } >> src\types\react.d.ts

echo Step 2: Updating the AnimatedCubes component...
echo // Import React and its hooks > src\components\AnimatedCubes\AnimatedCubes.tsx
echo import React from 'react'; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo import { useRef, useState, useCallback, useEffect } from 'react'; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo import type { ReactElement } from 'react'; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo. >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo // Define the Cube type >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo interface Cube { >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   x: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   y: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   z: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   size: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   color: string; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   speedX: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   speedY: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   opacity: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   pulseSpeed: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo   pulsePhase: number; >> src\components\AnimatedCubes\AnimatedCubes.tsx
echo } >> src\components\AnimatedCubes\AnimatedCubes.tsx

echo Step 3: Running the build to verify the fix...
call npm run build

echo ===== FIX COMPLETE =====
echo If the build was successful, the AnimatedCubes component has been fixed.
echo If there are still errors, please check the build output for details. 