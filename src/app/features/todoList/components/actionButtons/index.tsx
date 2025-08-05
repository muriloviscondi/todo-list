'use client';

import { DeleteIcon, EditIcon } from '@icons';
import { Flex } from '@layout';
import { IconButton } from '@ui';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

type Props = {
  id: string;
};

export const ActionButtons = ({ id }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleEdit = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set('id', id);
    router.push(`${pathname}?${params.toString()}`);
  }, [id, router, pathname, searchParams]);

  const handleDelete = useCallback(() => {
    // Add your delete logic here
    console.log('Delete item with id:', id);
  }, [id]);

  return (
    <Flex gap="0.5rem" alignItems="center">
      <IconButton
        size="sm"
        variant="warning"
        aria-label="Edit item"
        onClick={handleEdit}
      >
        <EditIcon size={16} />
      </IconButton>
      <IconButton
        size="sm"
        variant="danger"
        aria-label="Delete item"
        onClick={handleDelete}
      >
        <DeleteIcon size={16} />
      </IconButton>
    </Flex>
  );
};
