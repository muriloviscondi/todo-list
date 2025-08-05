import styled, { css } from 'styled-components';
import { TitleProps } from './types';
import { fontSizeMap } from './constants';

export const StyledTitle = styled.h1.withConfig({
  shouldForwardProp: (prop) =>
    !['level', 'color', 'weight', 'align', 'margin', '$isLineThrough'].includes(
      prop
    ),
})<TitleProps>`
  font-size: ${({ level = 2 }) => fontSizeMap[level]};
  color: ${({ color = '#2b303b' }) => color};
  font-weight: ${({ weight = 500 }) => weight};
  text-align: ${({ align = 'left' }) => align};
  margin: ${({ margin = '0' }) => margin};

  ${({ $isLineThrough }) =>
    $isLineThrough &&
    css`
      text-decoration: line-through;
    `}
`;
