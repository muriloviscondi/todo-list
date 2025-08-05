import { Flex } from '@/app/components/layout';
import { styled } from 'styled-components';

export const CardContainer = styled(Flex)`
  overflow-y: auto;

  max-height: calc(100vh - 22.625rem);

  @media (max-width: 768px) {
    max-height: calc(100vh - 23.375rem);
  }

  @media (max-width: 520px) {
    max-height: calc(100vh - 22.75rem);
  }
`;
