import React, { ButtonHTMLAttributes } from 'react';

type Variant = 'contained' | 'outline' | 'text';
type IconPosition = 'start' | 'end';
type Status = 'active' | 'loading' | 'disable';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'facebook'
  | 'gmail';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  icon?: JSX.Element;
  iconPosition?: IconPosition;
  status?: Status;
  size?: Size;
  color: Color;
}
