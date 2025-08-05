'use client';

import { Container, Flex } from '@layout';
import { Card, FormHeader, SearchFilter, TaskFilterType } from '@todoList';
import { Divider } from '@ui';
import { formatDate } from '@utils';
import { useCallback, useMemo, useState } from 'react';
import { TodoItem, todoListMock } from './data/mock';

export default function HomePage() {
  const [data, setData] = useState(todoListMock);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterInput, setFilterInput] = useState<TaskFilterType>('all');

  const [inputProps, setInputProps] = useState('');

  const cardData = useMemo(() => {
    return !!searchTerm || filterInput !== 'all'
      ? data.filter(
          (item) =>
            item.task.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterInput === 'all' || item.status === filterInput)
        )
      : data;
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
    <>
      <Container>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          gap={'1rem'}
        >
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

        <Flex
          direction="column"
          gap="1rem"
          style={{ maxHeight: 'calc(100vh - 15.125rem)', overflowY: 'auto' }}
        >
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
        </Flex>
      </Container>
    </>
  );
}
