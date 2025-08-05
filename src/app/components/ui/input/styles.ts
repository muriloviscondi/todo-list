'use client';

import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  width: 100%;
  outline: none;

  &:focus {
    border-color: #1a73e8;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }
`;
