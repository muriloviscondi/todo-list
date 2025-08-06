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
  color = '#0E89FF',
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
    $isLineThrough ? styles.lineThrough : null,
    align !== 'left'
      ? styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`]
      : null,
    className || null,
  ]
    .filter(
      (cls): cls is string => cls !== null && cls !== undefined && cls !== ''
    )
    .join(' ');

  const titleStyle: React.CSSProperties = {
    ...(color !== '#0E89FF' && { color }),
    ...(weight !== 500 && { fontWeight: weight }),
    ...(margin !== '0' && { margin }),
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
