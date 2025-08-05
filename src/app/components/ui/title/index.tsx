import React, { JSX } from 'react';
import styles from './Title.module.scss';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  weight?: number | string;
  align?: 'left' | 'center' | 'right';
  margin?: string;
  $isLineThrough?: boolean;
  children: React.ReactNode;
}

export const Title = ({
  level = 2,
  color = '#424242',
  weight = 500,
  align = 'left',
  margin = '0',
  $isLineThrough = false,
  children,
  className,
  style,
  ...rest
}: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const titleClasses = [
    styles.title,
    styles[`h${level}`],
    $isLineThrough ? styles.lineThrough : '',
    align !== 'left'
      ? styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`]
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const titleStyle = {
    color: color !== '#424242' ? color : undefined,
    fontWeight: weight !== 500 ? weight : undefined,
    margin: margin !== '0' ? margin : undefined,
    ...style,
  };

  return React.createElement(
    Tag,
    {
      className: titleClasses,
      style: titleStyle,
      ...rest,
    },
    children
  );
};
