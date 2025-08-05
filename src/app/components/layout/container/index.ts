import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1200px;
  }

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;
