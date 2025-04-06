declare module '@radix-ui/react-accordion' {
  import { ReactElement, ReactNode } from 'react';
  
  export interface AccordionRootProps {
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    collapsible?: boolean;
    children?: ReactNode;
    className?: string;
  }
  
  export interface AccordionItemProps {
    value: string;
    children?: ReactNode;
    className?: string;
  }
  
  export interface AccordionTriggerProps {
    children?: ReactNode;
    className?: string;
  }
  
  export interface AccordionContentProps {
    children?: ReactNode;
    className?: string;
  }
  
  export const Root: React.FC<AccordionRootProps>;
  export const Item: React.FC<AccordionItemProps>;
  export const Header: React.FC<{ children?: ReactNode; className?: string }>;
  export const Trigger: React.FC<AccordionTriggerProps>;
  export const Content: React.FC<AccordionContentProps>;
}

declare module '@radix-ui/react-alert-dialog' {
  import { ReactElement, ReactNode } from 'react';
  
  export interface AlertDialogRootProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: ReactNode;
  }
  
  export interface AlertDialogTriggerProps {
    children?: ReactNode;
    asChild?: boolean;
  }
  
  export interface AlertDialogContentProps {
    children?: ReactNode;
    className?: string;
  }
  
  export interface AlertDialogHeaderProps {
    children?: ReactNode;
    className?: string;
  }
  
  export interface AlertDialogFooterProps {
    children?: ReactNode;
    className?: string;
  }
  
  export interface AlertDialogTitleProps {
    children?: ReactNode;
    className?: string;
  }
  
  export interface AlertDialogDescriptionProps {
    children?: ReactNode;
    className?: string;
  }
  
  export interface AlertDialogActionProps {
    children?: ReactNode;
    className?: string;
  }
  
  export interface AlertDialogCancelProps {
    children?: ReactNode;
    className?: string;
  }
  
  export const Root: React.FC<AlertDialogRootProps>;
  export const Trigger: React.FC<AlertDialogTriggerProps>;
  export const Portal: React.FC<{ children?: ReactNode }>;
  export const Overlay: React.FC<{ className?: string }>;
  export const Content: React.FC<AlertDialogContentProps>;
  export const Header: React.FC<AlertDialogHeaderProps>;
  export const Footer: React.FC<AlertDialogFooterProps>;
  export const Title: React.FC<AlertDialogTitleProps>;
  export const Description: React.FC<AlertDialogDescriptionProps>;
  export const Action: React.FC<AlertDialogActionProps>;
  export const Cancel: React.FC<AlertDialogCancelProps>;
} 