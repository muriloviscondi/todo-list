import styled from 'styled-components';
import type { CSSProperties } from 'react';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string | number;
  direction?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
}

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['gap', 'direction', 'justifyContent', 'alignItems', 'flexWrap'].includes(
      prop
    ),
})<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};
  gap: ${({ gap }) => (typeof gap === 'number' ? `${gap}px` : gap)};
`;
