import styled from 'styled-components';
import React from 'react';
import { TagType } from '.';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: TagType;
  // description: string;
}

const variantStyles: Record<TagType, { bg: string; color: string }> = {
  success: { bg: '#e6f4ea', color: '#2e7d32' },
  warning: { bg: '#fff4e5', color: '#ed6c02' },
  error: { bg: '#fdecea', color: '#d32f2f' },
  info: { bg: '#e8f4fd', color: '#0288d1' },
  default: { bg: '#f0f1f3', color: '#676f7e' },
};

export const StyleTag = styled.span.withConfig({
  shouldForwardProp: (prop) => !['type'].includes(prop),
})<TagProps>`
  /* display: inline-block; */
  background-color: ${({ type = 'default' }) => variantStyles[type].bg};
  border-radius: 0.75rem;
  color: ${({ type = 'default' }) => variantStyles[type].color};
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  text-transform: capitalize;
`;
