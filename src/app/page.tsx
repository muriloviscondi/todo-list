'use client';

import { Container, Flex } from '@/app/components/layout';
import { Divider } from '@/app/components/ui/Divider';
import { Title } from '@/app/components/ui/title';
import { TodoItem, todoListMock } from '@/app/data/mock';
import {
  Card,
  CardContainer,
  FormHeader,
  SearchFilter,
  TaskFilterType,
} from '@/app/features/todoList';
import { formatDate } from '@/app/utils';
import { useCallback, useMemo, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState(todoListMock);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterInput, setFilterInput] = useState<TaskFilterType>('all');

  const [inputProps, setInputProps] = useState('');

  const cardData = useMemo(() => {
    return (
      !!searchTerm || filterInput !== 'all'
        ? data.filter(
            (item) =>
              item.task.toLowerCase().includes(searchTerm.toLowerCase()) &&
              (filterInput === 'all' || item.status === filterInput)
          )
        : data
    ).sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [data, filterInput, searchTerm]);

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

  const handleInputTaskChange = useCallback((value: string) => {
    setInputProps(value);
  }, []);

  const handleCreateTask = useCallback(() => {
    if (inputProps.trim() === '') {
      return;
    }

    const newTask: TodoItem = {
      id: String(Date.now()),
      task: inputProps,
      status: 'pending',
      createdAt: new Date(),
    };

    setData((prevData) => [...prevData, newTask]);
    setInputProps('');
  }, [inputProps]);

  const handleDelete = useCallback((id: string) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }, []);

  return (
    <Container>
      <Title level={1}>Lista de Tarefas</Title>

      <Flex alignItems="flex-start" justifyContent="space-between" gap={'1rem'}>
        <FormHeader
          inputTitle={inputProps}
          onInputChange={handleInputTaskChange}
          onConclude={handleCreateTask}
        />
      </Flex>

      <Divider />

      <SearchFilter
        filterInput={filterInput}
        searchTerm={searchTerm}
        onChangeFilter={setFilterInput}
        onSearch={handleSearch}
      />

      <Divider />

      <CardContainer direction="column" gap="1rem">
        {cardData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.task}
            footer={`Data de criação: ${formatDate(item.createdAt)}`}
            status={item.status}
            onToggle={handleChangeStatus}
            onDelete={handleDelete}
          />
        ))}
      </CardContainer>
    </Container>
  );
}
