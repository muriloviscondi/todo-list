import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
}; 