'use client';

import { PlusIcon } from '@icons';
import { Flex } from '@layout';
import { Button, Input } from '@ui';

type Props = {
  inputTitle: string;
  onTitleChange: (value: string) => void;
  onConclude: () => void;
};

export const FormHeader = ({
  inputTitle,
  onTitleChange,
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
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Task title"
      />

      <Button shape="circle" variant="success" onClick={onConclude}>
        <PlusIcon size={12} />
      </Button>
    </Flex>
  );
};
