import React from 'react';
import styled from 'styled-components';

type TextSize = 'sm' | 'md' | 'lg';

interface TextProps {
  children: React.ReactNode;
  size?: TextSize;
  $isLineThrough?: boolean;
}

const StyledText = styled.span<TextProps>`
  font-size: ${props => {
    switch (props.size) {
      case 'sm': return '0.875rem';
      case 'lg': return '1.125rem';
      default: return '1rem';
    }
  }};
  text-decoration: ${props => props.$isLineThrough ? 'line-through' : 'none'};
  color: inherit;
`;

export const Text = ({ children, size = 'md', $isLineThrough = false, ...props }: TextProps) => {
  return (
    <StyledText size={size} $isLineThrough={$isLineThrough} {...props}>
      {children}
    </StyledText>
  );
}; 