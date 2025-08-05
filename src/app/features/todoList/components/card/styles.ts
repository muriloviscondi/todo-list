import styled from 'styled-components';

interface PropsContainer {
  $isConcluded: boolean;
}

const colors: Record<string, { bg: string; color: string }> = {
  success: { bg: '#f8fdfc', color: '#81c784' },
  warning: { bg: '#fffcf5', color: '#ffb74d' },
};

export const Container = styled.div<PropsContainer>`
  background: ${({ $isConcluded }) =>
    $isConcluded ? colors.success.bg : colors.warning.bg};
  border: 1px solid lightgray;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 5px solid
    ${({ $isConcluded }) =>
      $isConcluded ? colors.success.color : colors.warning.color};
`;
