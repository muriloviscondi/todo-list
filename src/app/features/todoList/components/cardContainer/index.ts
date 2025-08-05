import { Flex } from '@layout';
import { styled } from 'styled-components';

export const CardContainer = styled(Flex)`
  overflow-y: auto;

  max-height: calc(100vh - 20.125rem);

  @media (max-width: 768px) {
    max-height: calc(100vh - 20.875rem);
  }

  @media (max-width: 648px) {
    max-height: calc(100vh - 20.25rem);
  }
`;
