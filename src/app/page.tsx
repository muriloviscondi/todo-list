'use client';

import { Container, Flex } from '@layout';
import { Card, SearchFilter, TaskFilterType } from '@todoList';
import { Button, Text, Title } from '@ui';
import { useCallback, useMemo, useState } from 'react';
import { todoListMock } from './data/mock';
import { formatDate } from '@utils';

export default function HomePage() {
  const [data, setData] = useState(todoListMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterInput, setFilterInput] = useState<TaskFilterType>('all');

  const cardData = useMemo(() => {
    return !!searchTerm || filterInput !== 'all'
      ? data.filter(
          (item) =>
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) &&
            (filterInput === 'all' || item.status === filterInput)
        )
      : data;
  }, [data, filterInput, searchTerm]);

  const handleChangeOpenModal = useCallback(() => {
    // Placeholder para futuras funcionalidades
  }, []);

  const handleChangeStatus = useCallback((id: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'concluded' ? 'pending' : 'concluded',
            }
          : item
      )
    );
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return (
    <>
      <Container>
        <Flex alignItems="baseline" justifyContent="space-between">
          <Flex direction="column" gap="0.5rem">
            <Title level={1}>To-Do List</Title>
            <Text>Manage your tasks efficiently</Text>
          </Flex>
          <Button variant="primary" onClick={handleChangeOpenModal}>
            Nova Tarefa
          </Button>
        </Flex>

        <SearchFilter
          filterInput={filterInput}
          searchTerm={searchTerm}
          onChangeFilter={setFilterInput}
          onSearch={handleSearch}
        />

        <Flex direction="column" gap="1rem">
          {cardData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              footer={`Data de criação: ${formatDate(item.createdAt)}`}
              status={item.status}
              onToggle={handleChangeStatus}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
}
