import { Flex } from '@/app/components/layout';
import { Button as UIButton } from '@/app/components/ui/button';
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
  border: 1px solid ${({ $active }) => ($active ? '#03a9f4' : '#e0e0e0')};
  background-color: ${({ $active }) => ($active ? '#03a9f4' : '#f5f5f5')};
  color: ${({ $active }) => ($active ? '#fff' : '#424242')};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? '#0277bd' : '#e0e0e0')};
    border-color: ${({ $active }) => ($active ? '#0277bd' : '#bdbdbd')};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
