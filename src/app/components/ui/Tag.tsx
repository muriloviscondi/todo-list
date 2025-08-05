import React from 'react';
import styled from 'styled-components';

type TagType = 'success' | 'warning' | 'info';

interface TagProps {
  type: TagType;
  description: string;
}

const StyledTag = styled.span<{ $type: TagType }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  background: ${props => {
    switch (props.$type) {
      case 'success': return '#d4edda';
      case 'warning': return '#fff3cd';
      case 'info': return '#d1ecf1';
      default: return '#f8f9fa';
    }
  }};
  
  color: ${props => {
    switch (props.$type) {
      case 'success': return '#155724';
      case 'warning': return '#856404';
      case 'info': return '#0c5460';
      default: return '#6c757d';
    }
  }};
  
  border: 1px solid ${props => {
    switch (props.$type) {
      case 'success': return '#c3e6cb';
      case 'warning': return '#ffeaa7';
      case 'info': return '#bee5eb';
      default: return '#dee2e6';
    }
  }};
`;

export const Tag = ({ type, description }: TagProps) => {
  return (
    <StyledTag $type={type}>
      {description}
    </StyledTag>
  );
}; 