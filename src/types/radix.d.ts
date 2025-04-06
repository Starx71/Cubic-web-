declare module '@radix-ui/react-accordion' {
  import { ReactElement, ReactNode, FC } from 'react';
  
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
  
  export const Root: FC<AccordionRootProps>;
  export const Item: FC<AccordionItemProps>;
  export const Header: FC<{ children?: ReactNode; className?: string }>;
  export const Trigger: FC<AccordionTriggerProps>;
  export const Content: FC<AccordionContentProps>;
}

declare module '@radix-ui/react-alert-dialog' {
  import { ReactElement, ReactNode, FC } from 'react';
  
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
  
  export const Root: FC<AlertDialogRootProps>;
  export const Trigger: FC<AlertDialogTriggerProps>;
  export const Portal: FC<{ children?: ReactNode }>;
  export const Overlay: FC<{ className?: string }>;
  export const Content: FC<AlertDialogContentProps>;
  export const Header: FC<AlertDialogHeaderProps>;
  export const Footer: FC<AlertDialogFooterProps>;
  export const Title: FC<AlertDialogTitleProps>;
  export const Description: FC<AlertDialogDescriptionProps>;
  export const Action: FC<AlertDialogActionProps>;
  export const Cancel: FC<AlertDialogCancelProps>;
} 