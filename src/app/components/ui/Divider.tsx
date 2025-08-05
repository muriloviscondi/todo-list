import React from 'react';
import styled from 'styled-components';

interface DividerProps {
  margin?: string;
}

const StyledDivider = styled.hr<DividerProps>`
  border: none;
  height: 1px;
  background-color: #e1e5e9;
  margin: ${props => props.margin || '1.5rem 0'};
`;

export const Divider = ({ margin }: DividerProps) => {
  return <StyledDivider margin={margin} />;
}; 