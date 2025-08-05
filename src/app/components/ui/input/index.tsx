import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './types';

export const Input = ({ className, ...props }: InputProps) => {
  const inputClasses = [styles.input, className].filter(Boolean).join(' ');

  return <input className={inputClasses} {...props} />;
};
