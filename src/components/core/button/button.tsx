/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';

import styles from './button.module.css';
import type { ButtonProps } from './button.type';

const button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant = 'contained',
    size = 'sm',
    icon,
    iconPosition = 'start',
    children,
    color,
    status,
    ...rest
  } = props;

  const root = cn(styles.btn, {
    [styles.xs]: size === 'xs',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.xl]: size === 'xl',
    [styles.contained]: variant === 'contained',
    [styles.outline]: variant === 'outline',
    [styles.text]: variant === 'text',
    [styles.facebook]: color === 'facebook',
    [styles.gmail]: color === 'gmail',
  });

  return (
    <button
      disabled={status === 'disable'}
      className={root}
      type={type}
      {...rest}
    >
      {icon && iconPosition === 'start' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'end' && icon}
    </button>
  );
};

export default button;
