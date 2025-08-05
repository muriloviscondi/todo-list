import styled, { css } from 'styled-components';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  weight?: number | string;
  align?: 'left' | 'center' | 'right';
  margin?: string;
  $isLineThrough?: boolean;
  children: React.ReactNode;
}

const fontSizeMap: Record<number, string> = {
  1: '2.5rem',
  2: '2rem',
  3: '1.75rem',
  4: '1.5rem',
  5: '1.25rem',
  6: '1rem',
};

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
