import styled, { css } from 'styled-components';
import { fontSizeMap } from './constants';
import { TextProps } from './type';

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
  color: ${({ color = '#757575' }) => color};
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
