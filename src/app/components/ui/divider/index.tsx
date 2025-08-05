import styled from 'styled-components';
import { DividerProps } from './types';

export const Divider = styled.div<DividerProps>`
  ${({ vertical, spacing = '16px', color = 'default' }) => `
    ${
      vertical
        ? `
        width: 1px;
        height: 100%;
        margin: 0 ${spacing};
      `
        : `
        height: 1px;
        width: 100%;
        margin: ${spacing} 0;
      `
    }
    background-color: ${color === 'light' ? '#f5f5f5' : '#e0e0e0'};
    flex-shrink: 0;
  `}
`;
