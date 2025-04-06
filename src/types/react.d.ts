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
    
    export function memo<P>(Component: (props: P) => ReactElement | null): (props: P) => ReactElement | null;
    export function forwardRef<T, P = {}>(render: (props: P, ref: React.Ref<T>) => ReactElement | null): (props: P & { ref?: React.Ref<T> }) => ReactElement | null;
    export function createContext<T>(defaultValue: T): Context<T>;
    export function useContext<T>(context: Context<T>): T;
    export function useMemo<T>(factory: () => T, deps: ReadonlyArray<any>): T;
    export function useId(): string;
    
    export interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        displayName?: string;
    }
    
    export interface Provider<T> {
        (props: ProviderProps<T>): ReactElement | null;
    }
    
    export interface Consumer<T> {
        (props: ConsumerProps<T>): ReactElement | null;
    }
    
    export interface ProviderProps<T> {
        value: T;
        children?: ReactNode;
    }
    
    export interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }
    
    export interface Ref<T> {
        current: T | null;
    }
    
    export type ElementRef<T extends JSXElementConstructor<any>> = T extends JSXElementConstructor<infer P> ? P : never;
    export type ComponentProps<T extends JSXElementConstructor<any>> = T extends JSXElementConstructor<infer P> ? P : never;
    export type ComponentPropsWithoutRef<T extends JSXElementConstructor<any>> = Omit<ComponentProps<T>, 'ref'>;
    export type HTMLAttributes<T> = {
        className?: string;
        style?: CSSProperties;
        [key: string]: any;
    };
    export type ButtonHTMLAttributes<T> = HTMLAttributes<T> & {
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        [key: string]: any;
    };
    export type KeyboardEvent<T = Element> = {
        key: string;
        code: string;
        keyCode: number;
        altKey: boolean;
        ctrlKey: boolean;
        metaKey: boolean;
        shiftKey: boolean;
        repeat: boolean;
        locale: string;
        getModifierState(keyArg: string): boolean;
        preventDefault(): void;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        isDefaultPrevented(): boolean;
        timeStamp: number;
        type: string;
    };

    export type ReactNode = ReactElement | string | number | boolean | null | undefined | ReactNodeArray;
    export interface ReactNodeArray extends Array<ReactNode> {}
    
    export interface ReactPortal {
        children: ReactNode;
    }
} 