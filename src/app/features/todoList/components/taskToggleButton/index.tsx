'use client';

import { CheckIcon, CircleIcon } from '@icons';
import { IconButton } from '@ui';

import { AnimatePresence, motion } from 'motion/react';

interface TaskToggleButtonProps {
  isConcluded?: boolean;
  onToggle: () => void;
}

export default function TaskToggleButton({
  isConcluded = false,
  onToggle,
}: TaskToggleButtonProps) {
  return (
    <IconButton
      size={'md'}
      variant={isConcluded ? 'success' : 'warning'}
      aria-label={
        isConcluded ? 'Marcar como pendente' : 'Marcar como concluída'
      }
      onClick={onToggle}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key="check"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          {isConcluded ? <CheckIcon size={20} /> : <CircleIcon size={20} />}
        </motion.span>
      </AnimatePresence>
    </IconButton>
  );
}
