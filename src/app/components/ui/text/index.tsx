import React from 'react';
import styles from './Text.module.scss';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  align?: 'left' | 'center' | 'right';
  color?: string;
  family?: string;
  margin?: string;
  size?: 'sm' | 'md' | 'lg';
  weight?: number | string;
  children: React.ReactNode;
  $isLineThrough?: boolean;
}

export const Text = ({
  align = 'left',
  color = '#757575',
  family = 'var(--font-roboto)',
  margin = '0',
  size = 'md',
  weight = 400,
  children,
  $isLineThrough = false,
  className,
  style,
  ...props
}: TextProps) => {
  const textClasses = [
    styles.text,
    styles[size],
    $isLineThrough ? styles.lineThrough : '',
    align !== 'left'
      ? styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`]
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const textStyle = {
    color: color !== '#757575' ? color : undefined,
    fontFamily: family !== 'var(--font-roboto)' ? family : undefined,
    margin: margin !== '0' ? margin : undefined,
    fontWeight: weight !== 400 ? weight : undefined,
    ...style,
  };

  return (
    <span className={textClasses} style={textStyle} {...props}>
      {children}
    </span>
  );
};
