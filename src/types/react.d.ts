// This file ensures TypeScript can find all React types
// It properly declares the React module

declare module 'react' {
  // React types
  export type ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> = {
    type: T;
    props: P;
    key: Key | null;
  };
  
  export type ReactNode = ReactElement | string | number | Iterable<ReactNode> | ReactPortal | boolean | null | undefined;
  
  export type Key = string | number;
  
  export type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null) | (new (props: P) => Component<any, any>);
  
  export interface Component<P = {}, S = {}> {
    props: P;
    state: S;
    setState(state: S | ((prevState: S, props: P) => S), callback?: () => void): void;
    forceUpdate(callback?: () => void): void;
    render(): ReactNode;
  }
  
  export interface ReactPortal {
    key: null | string;
    children: ReactNode;
  }
  
  // Hooks
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;
  export function useMemo<T>(factory: () => T, deps: ReadonlyArray<any>): T;
  export function useContext<T>(context: Context<T>): T;
  export function createContext<T>(defaultValue: T): Context<T>;
  export function forwardRef<T, P = {}>(render: (props: P, ref: React.Ref<T>) => ReactElement | null): ForwardRefExoticComponent<P & { ref?: React.Ref<T> }>;
  export function memo<P extends object>(Component: FunctionComponent<P>, propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean): MemoExoticComponent<FunctionComponent<P>>;
  export function useId(): string;
  
  // Types
  export type FunctionComponent<P = {}> = (props: P) => ReactElement | null;
  export type ForwardRefExoticComponent<P> = {
    (props: P): ReactElement | null;
    displayName?: string;
  };
  export type MemoExoticComponent<T> = T & { displayName?: string };
  export type Context<T> = {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    displayName?: string;
    _currentValue: T;
  };
  export type Provider<T> = FunctionComponent<ProviderProps<T>>;
  export type Consumer<T> = FunctionComponent<ConsumerProps<T>>;
  export interface ProviderProps<T> {
    value: T;
    children?: ReactNode;
  }
  export interface ConsumerProps<T> {
    children: (value: T) => ReactNode;
  }
  export type Ref<T> = RefCallback<T> | RefObject<T> | null;
  export type RefCallback<T> = (instance: T | null) => void;
  export interface RefObject<T> {
    current: T | null;
  }
  
  // Component Props
  export type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = T extends JSXElementConstructor<infer P> ? P : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : {};
  export type ComponentPropsWithoutRef<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = Omit<ComponentProps<T>, 'ref'>;
  export type ElementRef<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = T extends JSXElementConstructor<infer R> ? R : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : never;
  
  // HTML Attributes
  export type HTMLAttributes<T> = React.AriaAttributes & React.DOMAttributes<T>;
  export type ButtonHTMLAttributes<T> = React.ButtonHTMLAttributes<T>;
  export type InputHTMLAttributes<T> = React.InputHTMLAttributes<T>;
  export type SelectHTMLAttributes<T> = React.SelectHTMLAttributes<T>;
  export type TextareaHTMLAttributes<T> = React.TextareaHTMLAttributes<T>;
  export type AnchorHTMLAttributes<T> = React.AnchorHTMLAttributes<T>;
  export type ImgHTMLAttributes<T> = React.ImgHTMLAttributes<T>;
  export type FormHTMLAttributes<T> = React.FormHTMLAttributes<T>;
  export type LabelHTMLAttributes<T> = React.LabelHTMLAttributes<T>;
  export type LiHTMLAttributes<T> = React.LiHTMLAttributes<T>;
  export type OlHTMLAttributes<T> = React.OlHTMLAttributes<T>;
  export type UlHTMLAttributes<T> = React.UlHTMLAttributes<T>;
  export type TableHTMLAttributes<T> = React.TableHTMLAttributes<T>;
  export type TdHTMLAttributes<T> = React.TdHTMLAttributes<T>;
  export type ThHTMLAttributes<T> = React.ThHTMLAttributes<T>;
  export type TrHTMLAttributes<T> = React.TrHTMLAttributes<T>;
  export type TheadHTMLAttributes<T> = React.TheadHTMLAttributes<T>;
  export type TbodyHTMLAttributes<T> = React.TbodyHTMLAttributes<T>;
  export type TfootHTMLAttributes<T> = React.TfootHTMLAttributes<T>;
  export type ColgroupHTMLAttributes<T> = React.ColgroupHTMLAttributes<T>;
  export type ColHTMLAttributes<T> = React.ColHTMLAttributes<T>;
  export type CaptionHTMLAttributes<T> = React.CaptionHTMLAttributes<T>;
  export type IframeHTMLAttributes<T> = React.IframeHTMLAttributes<T>;
  export type ObjectHTMLAttributes<T> = React.ObjectHTMLAttributes<T>;
  export type EmbedHTMLAttributes<T> = React.EmbedHTMLAttributes<T>;
  export type ParamHTMLAttributes<T> = React.ParamHTMLAttributes<T>;
  export type SourceHTMLAttributes<T> = React.SourceHTMLAttributes<T>;
  export type AudioHTMLAttributes<T> = React.AudioHTMLAttributes<T>;
  export type VideoHTMLAttributes<T> = React.VideoHTMLAttributes<T>;
  export type TrackHTMLAttributes<T> = React.TrackHTMLAttributes<T>;
  export type MediaHTMLAttributes<T> = React.MediaHTMLAttributes<T>;
  export type MenuHTMLAttributes<T> = React.MenuHTMLAttributes<T>;
  export type MetaHTMLAttributes<T> = React.MetaHTMLAttributes<T>;
  export type QuoteHTMLAttributes<T> = React.QuoteHTMLAttributes<T>;
  export type ScriptHTMLAttributes<T> = React.ScriptHTMLAttributes<T>;
  export type StyleHTMLAttributes<T> = React.StyleHTMLAttributes<T>;
  export type TimeHTMLAttributes<T> = React.TimeHTMLAttributes<T>;
  export type TitleHTMLAttributes<T> = React.TitleHTMLAttributes<T>;
  export type DetailsHTMLAttributes<T> = React.DetailsHTMLAttributes<T>;
  export type DialogHTMLAttributes<T> = React.DialogHTMLAttributes<T>;
  export type SlotHTMLAttributes<T> = React.SlotHTMLAttributes<T>;
  export type SummaryHTMLAttributes<T> = React.SummaryHTMLAttributes<T>;
  export type MarqueeHTMLAttributes<T> = React.MarqueeHTMLAttributes<T>;
  export type MenuItemHTMLAttributes<T> = React.MenuItemHTMLAttributes<T>;
  export type OptionHTMLAttributes<T> = React.OptionHTMLAttributes<T>;
  export type OutputHTMLAttributes<T> = React.OutputHTMLAttributes<T>;
  export type ProgressHTMLAttributes<T> = React.ProgressHTMLAttributes<T>;
  export type QuoteHTMLAttributes<T> = React.QuoteHTMLAttributes<T>;
  export type SlotHTMLAttributes<T> = React.SlotHTMLAttributes<T>;
  export type SummaryHTMLAttributes<T> = React.SummaryHTMLAttributes<T>;
  export type TextareaHTMLAttributes<T> = React.TextareaHTMLAttributes<T>;
  export type ThHTMLAttributes<T> = React.ThHTMLAttributes<T>;
  export type TimeHTMLAttributes<T> = React.TimeHTMLAttributes<T>;
  export type TitleHTMLAttributes<T> = React.TitleHTMLAttributes<T>;
  export type TrackHTMLAttributes<T> = React.TrackHTMLAttributes<T>;
  export type VideoHTMLAttributes<T> = React.VideoHTMLAttributes<T>;
  export type WebViewHTMLAttributes<T> = React.WebViewHTMLAttributes<T>;
  
  // Aria Attributes
  export interface AriaAttributes {
    'aria-activedescendant'?: string;
    'aria-atomic'?: boolean | 'false' | 'true';
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-busy'?: boolean | 'false' | 'true';
    'aria-checked'?: boolean | 'false' | 'true' | 'mixed';
    'aria-colcount'?: number;
    'aria-colindex'?: number;
    'aria-colspan'?: number;
    'aria-controls'?: string;
    'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: boolean | 'false' | 'true';
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
    'aria-errormessage'?: string;
    'aria-expanded'?: boolean | 'false' | 'true';
    'aria-flowto'?: string;
    'aria-haspopup'?: boolean | 'false' | 'true' | 'dialog' | 'grid' | 'listbox' | 'menu' | 'tree';
    'aria-hidden'?: boolean | 'false' | 'true';
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-level'?: number;
    'aria-live'?: 'off' | 'polite' | 'assertive';
    'aria-modal'?: boolean | 'false' | 'true';
    'aria-multiline'?: boolean | 'false' | 'true';
    'aria-multiselectable'?: boolean | 'false' | 'true';
    'aria-orientation'?: 'horizontal' | 'vertical';
    'aria-owns'?: string;
    'aria-placeholder'?: string;
    'aria-posinset'?: number;
    'aria-pressed'?: boolean | 'false' | 'true' | 'mixed';
    'aria-readonly'?: boolean | 'false' | 'true';
    'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals';
    'aria-required'?: boolean | 'false' | 'true';
    'aria-roledescription'?: string;
    'aria-rowcount'?: number;
    'aria-rowindex'?: number;
    'aria-rowspan'?: number;
    'aria-selected'?: boolean | 'false' | 'true';
    'aria-setsize'?: number;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    'aria-valuetext'?: string;
  }
  
  // DOM Attributes
  export interface DOMAttributes<T> {
    children?: ReactNode;
    dangerouslySetInnerHTML?: {
      __html: string;
    };
    suppressHydrationWarning?: boolean;
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;
    suppressContentEditableWarning?: boolean;
    style?: CSSProperties;
    className?: string;
    id?: string;
    key?: Key;
    ref?: Ref<T>;
    role?: string;
    tabIndex?: number;
    title?: string;
    lang?: string;
    dir?: 'ltr' | 'rtl' | 'auto';
    hidden?: boolean;
    draggable?: boolean;
    spellCheck?: boolean;
    contentEditable?: boolean;
    autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    autoCorrect?: 'on' | 'off';
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    security?: string;
    unselectable?: 'on' | 'off';
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    is?: string;
    radioGroup?: string;
  }
  
  // CSS Properties
  export interface CSSProperties extends CSS.Properties<string | number> {}
  
  // JSX
  export namespace JSX {
    interface Element extends ReactElement<any, any> {}
    interface ElementClass extends Component<any> {
      render(): ReactNode;
    }
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }
    interface IntrinsicAttributes extends AriaAttributes, DOMAttributes<any> {}
    interface IntrinsicClassAttributes<T> {
      ref?: Ref<T>;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
} 