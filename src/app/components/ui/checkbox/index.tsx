// components/Checkbox.tsx
'use client';

import { useId } from 'react';
import * as S from './styles';
import { CheckIcon } from '@icons';

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  checked,
  onChange,
  ...rest
}: CheckboxProps) => {
  const id = useId();

  return (
    <S.Container>
      <S.HiddenCheckbox
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        {...rest}
      />
      <S.StyledLabel htmlFor={id}>
        <S.Box checked={checked}>
          {checked && (
            // <S.Check>
            <CheckIcon size={24} color="#10b981" />
            // </S.Check>
          )}
        </S.Box>
        {label && <S.Text>{label}</S.Text>}
      </S.StyledLabel>
    </S.Container>
  );
};
