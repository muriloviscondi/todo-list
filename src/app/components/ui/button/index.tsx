import React from 'react';
import { StyledButtonProps, Variant } from '@/app/components/ui/button/types';
import styles from './Button.module.scss';

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {}

export const Button = ({
  children,
  variant = 'default',
  size = 'md',
  type = 'button',
  shape = 'default',
  active = false,
  className,
  ...props
}: Props) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    shape === 'circle' ? styles.circle : '',
    active ? styles.active : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export type { Variant, StyledButtonProps };
