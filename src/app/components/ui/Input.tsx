import React from 'react';
import styles from './InputField.module.scss';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const inputClasses = [styles.inputField, className].filter(Boolean).join(' ');

  return <input ref={ref} className={inputClasses} {...props} />;
});

Input.displayName = 'Input';
