import { styled } from 'styled-components';

// styles (can be in same file or separate)
export const Container = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Box = styled.span<{ checked: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${({ checked }) => (checked ? '#1a73e8' : '#ccc')};
  background: ${({ checked }) => (checked ? '#1a73e8' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
`;

export const Check = styled.span`
  color: white;
  font-size: 1.5rem;
`;

export const Text = styled.span`
  font-size: 1.5rem;
  color: #333;
`;
