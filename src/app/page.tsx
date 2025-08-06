'use client';

import { Container, Flex } from '@/app/components/layout';
import { Divider, EmptyState, Title } from '@/app/components/ui';
import { StatusType, TodoItem } from '@/app/data/mock';
import {
  Card,
  CardContainer,
  FormHeader,
  SearchFilter,
  TaskFilterType,
} from '@/app/features/todoList';
import { formatDate, generateId } from '@/app/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTodoDataLocalStorage } from './hooks/useTodoDataLocalStorage';

export default function HomePage() {
  const { getTodosFromLocalStorage, saveTodosToLocalStorage } =
    useTodoDataLocalStorage();

  const [data, setData] = useState<TodoItem[]>(getTodosFromLocalStorage());
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar dados do localStorage após a hidratação
  useEffect(() => {
    const loadedData = getTodosFromLocalStorage();
    setData(loadedData);
    setIsLoaded(true);
  }, [getTodosFromLocalStorage]);

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
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() &&
        b.status.localeCompare(a.status)
    );
  }, [data, filterInput, searchTerm]);

  const handleChangeStatus = useCallback(
    (id: string) => {
      const newTodoList = data.map((item) =>
        item.id === id
          ? {
              ...item,
              status: (item.status === 'concluded'
                ? 'pending'
                : 'concluded') as StatusType,
            }
          : item
      );

      setData(newTodoList);
      saveTodosToLocalStorage(newTodoList);
    },
    [data, saveTodosToLocalStorage]
  );

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
      id: generateId(),
      task: inputProps,
      status: 'pending',
      createdAt: new Date(),
    };

    const newTodoList = [...data, newTask];

    saveTodosToLocalStorage(newTodoList);
    setData(newTodoList);
    setInputProps('');
  }, [data, inputProps, saveTodosToLocalStorage]);

  const handleDelete = useCallback(
    (id: string) => {
      const newTodoList = data.filter((item) => item.id !== id);

      setData(newTodoList);
      saveTodosToLocalStorage(newTodoList);
    },
    [data, saveTodosToLocalStorage]
  );

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

      {isLoaded && (
        <CardContainer direction="column" gap="1rem">
          {cardData.length > 0 ? (
            cardData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.task}
                footer={`Data de criação: ${formatDate(item.createdAt)}`}
                status={item.status}
                onToggle={handleChangeStatus}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <EmptyState
              title={
                searchTerm || filterInput !== 'all'
                  ? 'Nenhuma tarefa encontrada'
                  : 'Lista vazia'
              }
              description={
                searchTerm || filterInput !== 'all'
                  ? 'Nenhuma tarefa corresponde aos filtros aplicados. Tente ajustar a busca ou criar uma nova tarefa.'
                  : 'Você ainda não possui tarefas. Comece criando sua primeira tarefa usando o formulário acima.'
              }
            />
          )}
        </CardContainer>
      )}
    </Container>
  );
}
