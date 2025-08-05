import styled from 'styled-components';
import React from 'react';
import { TagType } from '.';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: TagType;
}

const variantStyles: Record<TagType, { bg: string; color: string }> = {
  success: { bg: '#e8f5e8', color: '#4caf50' },
  warning: { bg: '#fff3e0', color: '#ff9800' },
  error: { bg: '#ffebee', color: '#f44336' },
  info: { bg: '#e1f5fe', color: '#03a9f4' },
  default: { bg: '#f5f5f5', color: '#757575' },
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
