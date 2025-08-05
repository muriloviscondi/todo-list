'use client';

import { Flex } from '@layout';
import { Button, Input, TextArea, Title } from '@ui';

import { AnimatePresence, motion } from 'motion/react';
import * as S from './styles';

type Props = {
  expanded: boolean;
  inputTitle: string;
  inputDescription: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onExpandChange: () => void;
  onConclude: () => void;
};

export const ExpandableTaskForm = ({
  expanded,
  inputTitle,
  inputDescription,
  onConclude,
  onDescriptionChange,
  onExpandChange,
  onTitleChange,
}: Props) => {
  return (
    <S.Container>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key="check"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          {!expanded ? (
            <Flex
              key={'header'}
              alignItems="center"
              justifyContent="space-between"
            >
              <Title>To-do List</Title>
              <Button variant="primary" onClick={onExpandChange}>
                Adicionar Nova Tarefa
              </Button>
            </Flex>
          ) : (
            <Flex
              key={'form'}
              alignItems="flex-start"
              justifyContent="space-between"
              gap="1rem"
            >
              <Flex direction="column" gap="0.5rem" style={{ width: '100%' }}>
                <Input
                  value={inputTitle}
                  onChange={(e) => onTitleChange(e.target.value)}
                  placeholder="Task title"
                />
                <TextArea
                  value={inputDescription}
                  onChange={(e) => onDescriptionChange(e.target.value)}
                  placeholder="Task description"
                  rows={3}
                />
              </Flex>

              <Flex direction="column" gap="0.5rem">
                <Button variant="primary" onClick={onConclude}>
                  Adicionar
                </Button>
                <Button variant="danger" onClick={onExpandChange}>
                  Cancelar
                </Button>
              </Flex>
            </Flex>
          )}
        </motion.span>
      </AnimatePresence>
    </S.Container>
  );
};
