import { Flex } from '@layout';
import { Tag, Text, Title } from '@ui';
import { StatusType } from '../../../../data/mock';
import TaskToggleButton from '../taskToggleButton';
import * as S from './styles';
import { useCallback } from 'react';
import { ActionButtons } from '../actionButtons';

type CardProps = {
  id: string;
  title: string;
  description: string;
  footer: string;
  status: StatusType;
  onToggle?: (id: string) => void;
};

export const Card = ({
  id,
  title,
  description,
  footer,
  status,
  onToggle,
}: CardProps) => {
  const isConcluded = status === 'concluded';

  const handleToggle = useCallback(() => {
    onToggle?.(id);
  }, [id, onToggle]);

  return (
    <S.Container $isConcluded={isConcluded}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2rem auto',
          gap: '1.5rem',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <TaskToggleButton isConcluded={isConcluded} onToggle={handleToggle} />

        <Flex direction="column" gap="0.75rem" style={{ width: '100%' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Title level={5} $isLineThrough={isConcluded}>
              {title}
            </Title>
            <ActionButtons id={id} />
          </Flex>
          <Text $isLineThrough={isConcluded}>{description}</Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Text size="sm" $isLineThrough={isConcluded}>
              {footer}
            </Text>
            <Tag
              type={status === 'concluded' ? 'success' : 'warning'}
              description={status?.toUpperCase()}
            />
          </Flex>
        </Flex>
      </div>
    </S.Container>
  );
};
