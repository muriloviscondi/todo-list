import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 6px;
  border: 1px solid ${({ $active }) => ($active ? '#1a73e8' : '#ccc')};
  background-color: ${({ $active }) => ($active ? '#e8f0fe' : 'white')};
  color: ${({ $active }) => ($active ? '#1a73e8' : '#333')};
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover {
    background-color: #f2f2f2;
  }
`;
