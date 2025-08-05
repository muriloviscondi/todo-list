import { SearchIcon } from '@icons';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  left: 12px;
  top: 50%;
  width: 18px;
  height: 18px;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`;
