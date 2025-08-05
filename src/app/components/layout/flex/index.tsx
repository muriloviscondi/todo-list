import React, { CSSProperties } from 'react';
import styles from './Flex.module.scss';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string | number;
  direction?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  gap,
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  flexWrap = 'nowrap',
  children,
  className,
  style,
  ...props
}) => {
  const flexClasses = [styles.flex, className].filter(Boolean).join(' ');

  const flexStyle: CSSProperties = {
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    ...style,
  };

  return (
    <div className={flexClasses} style={flexStyle} {...props}>
      {children}
    </div>
  );
};
