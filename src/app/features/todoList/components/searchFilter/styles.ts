import { Flex } from '@layout';
import { Button as UIButton } from '@ui';
import { styled } from 'styled-components';

export const Container = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled(UIButton)<{ $active: boolean }>`
  border: 1px solid ${({ $active }) => ($active ? '#1a73e8' : '#e0e0e0')};
  background-color: ${({ $active }) => ($active ? '#1a73e8' : '#f5f5f5')};
  color: ${({ $active }) => ($active ? '#fff' : '#333')};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? '#1669c1' : '#e0e0e0')};
    border-color: ${({ $active }) => ($active ? '#1669c1' : '#ccc')};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
