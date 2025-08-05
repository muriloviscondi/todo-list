import styled from 'styled-components';

interface PropsContainer {
  $isConcluded: boolean;
}

const colors: Record<string, { bg: string; color: string }> = {
  success: { bg: '#f3f9ff', color: '#4caf50' },
  warning: { bg: '#fff8e1', color: '#ff9800' },
};

export const Container = styled.div<PropsContainer>`
  background: ${({ $isConcluded }) =>
    $isConcluded ? colors.success.bg : colors.warning.bg};
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  border-left: 5px solid
    ${({ $isConcluded }) =>
      $isConcluded ? colors.success.color : colors.warning.color};
`;
