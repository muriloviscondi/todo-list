'use client';

import { PlusIcon } from '@/app/components/icons';
import { Flex } from '@/app/components/layout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/Input';

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
  return (
    <Flex
      key={'form'}
      alignItems="center"
      justifyContent="space-between"
      gap="1rem"
      style={{ width: '100%' }}
    >
      <Input
        width={'100%'}
        value={inputTitle}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />

      <Button shape="circle" size="sm" variant="success" onClick={onConclude}>
        <PlusIcon size={12} />
      </Button>
    </Flex>
  );
};
