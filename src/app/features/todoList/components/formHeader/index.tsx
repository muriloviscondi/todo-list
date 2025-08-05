'use client';

import { PlusIcon } from '@icons';
import { Flex } from '@layout';
import { Button, Input } from '@ui';

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
        placeholder="Tarefa a realizar"
      />

      <Button shape="circle" variant="success" onClick={onConclude}>
        <PlusIcon size={12} />
      </Button>
    </Flex>
  );
};
