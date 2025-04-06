declare module 'react-router-dom' {
  import { ReactElement, ReactNode } from 'react';
  
  export interface RouteProps {
    path?: string;
    element?: ReactElement | null;
    index?: boolean;
    children?: ReactNode;
  }
  
  export interface RoutesProps {
    children?: ReactNode;
    location?: any;
  }
  
  export function Routes(props: RoutesProps): ReactElement | null;
  export function Route(props: RouteProps): ReactElement | null;
  export function BrowserRouter(props: { children?: ReactNode }): ReactElement;
  export function Link(props: { to: string; children?: ReactNode; className?: string }): ReactElement;
  export function NavLink(props: { to: string; children?: ReactNode; className?: string | ((isActive: boolean) => string) }): ReactElement;
  export function useNavigate(): (to: string) => void;
  export function useLocation(): { pathname: string; search: string; hash: string };
  export function useParams(): Record<string, string>;
}

declare module '@tanstack/react-query' {
  import { ReactNode } from 'react';
  
  export interface QueryClient {
    // Add methods as needed
  }
  
  export interface QueryClientProviderProps {
    client: QueryClient;
    children?: ReactNode;
  }
  
  export function QueryClientProvider(props: QueryClientProviderProps): ReactElement;
  export class QueryClient {
    constructor(options?: any);
  }
} 