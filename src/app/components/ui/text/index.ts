import styled, { css } from 'styled-components';
import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  align?: 'left' | 'center' | 'right';
  color?: string;
  family?: string;
  margin?: string;
  size?: 'sm' | 'md' | 'lg';
  weight?: number | string;
  children: React.ReactNode;
  $isLineThrough?: boolean;
}

const fontSizeMap = {
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
};

export const Text = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'align',
      'color',
      'family',
      '$isLineThrough',
      'margin',
      'size',
      'weight',
    ].includes(prop),
})<TextProps>`
  display: block;
  color: ${({ color = '#676f7e' }) => color};
  font-family: ${({ family = 'var(--font-roboto)' }) => family};
  font-size: ${({ size = 'md' }) => fontSizeMap[size]};
  font-weight: ${({ weight = 400 }) => weight};
  line-height: 1.5;
  margin: ${({ margin = '0' }) => margin};
  text-align: ${({ align = 'left' }) => align};
  white-space: pre-wrap;

  ${({ $isLineThrough: isLineThrough }) =>
    isLineThrough &&
    css`
      text-decoration: line-through;
    `}
`;
