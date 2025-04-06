declare module 'recharts' {
  import { ReactElement, ReactNode, CSSProperties } from 'react';
  
  export interface ChartProps {
    width?: number;
    height?: number;
    data?: any[];
    margin?: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    [key: string]: any;
  }
  
  export interface CartesianGridProps {
    strokeDasharray?: string;
    vertical?: boolean;
    horizontal?: boolean;
    [key: string]: any;
  }
  
  export interface XAxisProps {
    dataKey?: string;
    type?: 'number' | 'category';
    scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'threshold' | 'utc' | 'timeUtc';
    tickFormatter?: (value: any) => string;
    [key: string]: any;
  }
  
  export interface YAxisProps {
    dataKey?: string;
    type?: 'number' | 'category';
    scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'threshold' | 'utc' | 'timeUtc';
    tickFormatter?: (value: any) => string;
    [key: string]: any;
  }
  
  export interface TooltipProps {
    content?: ReactElement | ((props: any) => ReactElement);
    formatter?: (value: any, name: string, props: any) => [string, string];
    labelFormatter?: (label: any) => string;
    [key: string]: any;
  }
  
  export interface LegendProps {
    verticalAlign?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'center' | 'right';
    [key: string]: any;
  }
  
  export interface LineProps {
    type?: 'monotone' | 'linear' | 'step' | 'stepBefore' | 'stepAfter';
    dataKey?: string;
    stroke?: string;
    strokeWidth?: number;
    dot?: boolean | ReactElement | ((props: any) => ReactElement);
    activeDot?: boolean | ReactElement | ((props: any) => ReactElement);
    [key: string]: any;
  }
  
  export interface BarProps {
    dataKey?: string;
    fill?: string;
    [key: string]: any;
  }
  
  export interface AreaProps {
    type?: 'monotone' | 'linear' | 'step' | 'stepBefore' | 'stepAfter';
    dataKey?: string;
    stroke?: string;
    fill?: string;
    [key: string]: any;
  }
  
  export interface PieProps {
    dataKey?: string;
    nameKey?: string;
    cx?: number | string;
    cy?: number | string;
    innerRadius?: number | string;
    outerRadius?: number | string;
    fill?: string;
    [key: string]: any;
  }
  
  export const ResponsiveContainer: (props: ChartProps) => ReactElement;
  export const LineChart: (props: ChartProps) => ReactElement;
  export const BarChart: (props: ChartProps) => ReactElement;
  export const AreaChart: (props: ChartProps) => ReactElement;
  export const PieChart: (props: ChartProps) => ReactElement;
  export const CartesianGrid: (props: CartesianGridProps) => ReactElement;
  export const XAxis: (props: XAxisProps) => ReactElement;
  export const YAxis: (props: YAxisProps) => ReactElement;
  export const Tooltip: (props: TooltipProps) => ReactElement;
  export const Legend: (props: LegendProps) => ReactElement;
  export const Line: (props: LineProps) => ReactElement;
  export const Bar: (props: BarProps) => ReactElement;
  export const Area: (props: AreaProps) => ReactElement;
  export const Pie: (props: PieProps) => ReactElement;
  export const Cell: (props: { fill?: string; [key: string]: any }) => ReactElement;
} 