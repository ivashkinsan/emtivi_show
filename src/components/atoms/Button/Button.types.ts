import React from 'react';

// A more robust polymorphic component typing
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export const buttonVariants = [
  'primary', 'secondary', 'glass', 'ghost', 'outline', 
  'danger', 'success', 'tv', 'hero', 'icon', 'floating'
] as const;

export const buttonSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'hero'] as const;

export type ButtonVariant = typeof buttonVariants[number];
export type ButtonSize = typeof buttonSizes[number];

export interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}
