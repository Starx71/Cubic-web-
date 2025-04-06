declare module 'react' {
    export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }

    export type Key = string | number;

    export interface JSXElementConstructor<P> {
        (props: P): ReactElement<any, any> | null;
    }

    export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
    export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
    export function useRef<T>(initialValue: T): { current: T };
    export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;
    export function createElement<P = any, T extends string | JSXElementConstructor<P> = string | JSXElementConstructor<P>>(
        type: T,
        props?: P,
        ...children: ReactNode[]
    ): ReactElement<P, T>;

    export type ReactNode = ReactElement | string | number | boolean | null | undefined | ReactNodeArray;
    export interface ReactNodeArray extends Array<ReactNode> {}
} 