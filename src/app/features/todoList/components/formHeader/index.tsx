'use client';

import { PlusIcon } from '@/app/components/icons';
import { Flex } from '@/app/components/layout';
import { Button, Input } from '@/app/components/ui';

type Props = {
  inputTitle: string;
  onInputChange: (value: string) => void;
  onConclude: () => void;
};

export const FormHeader = ({
  inputTitle,
  onInputChange,
  onConclude,
}: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onConclude();
    }
  };

  return (
    <Flex
      key={'form'}
      alignItems="center"
      justifyContent="space-between"
      gap="1rem"
      style={{ width: '100%' }}
    >
      <Input
        value={inputTitle}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Adicionar nova tarefa"
        style={{ width: '100%' }}
      />

      <Button shape="circle" size="sm" variant="success" onClick={onConclude}>
        <PlusIcon size={12} />
      </Button>
    </Flex>
  );
};
