import React from 'react';
import styles from './Container.module.scss';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const containerClasses = [styles.container, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};
