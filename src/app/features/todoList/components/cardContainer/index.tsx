import React, { CSSProperties } from 'react';
import styles from './CardContainer.module.scss';

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string | number;
  direction?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  children: React.ReactNode;
}

export const CardContainer = ({
  children,
  className,
  gap,
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  flexWrap = 'nowrap',
  style,
  ...props
}: CardContainerProps) => {
  const containerClasses = [styles.cardContainer, className]
    .filter(Boolean)
    .join(' ');

  const containerStyle: CSSProperties = {
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    ...style,
  };

  return (
    <div className={containerClasses} style={containerStyle} {...props}>
      {children}
    </div>
  );
};
