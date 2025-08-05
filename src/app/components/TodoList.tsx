'use client';

import { SearchFilter } from '@/app/components/SearchFilter';
import { TodoForm } from '@/app/components/TodoForm';
import { TodoItem as TodoItemComponent } from '@/app/components/TodoItem';
import { Container } from '@/app/components/layout';
import { TodoItem } from '@/app/types/todo';
import { formatDate } from '@/app/utils';
import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

type TaskFilterType = 'all' | 'pending' | 'concluded';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #333;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e1e5e9;
  margin: 1.5rem 0;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<TaskFilterType>('all');

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.task
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || todo.status === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [todos, searchTerm, filterType]);

  const handleCreateTodo = useCallback((task: string) => {
    const newTodo: TodoItem = {
      id: String(Date.now()),
      task,
      status: 'pending',
      createdAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const handleToggleStatus = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'concluded' ? 'pending' : 'concluded',
            }
          : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <Container>
      <Title>Lista de Tarefas</Title>

      <TodoForm onCreateTodo={handleCreateTodo} />

      <Divider />

      <SearchFilter
        searchTerm={searchTerm}
        filterType={filterType}
        onSearchChange={setSearchTerm}
        onFilterChange={setFilterType}
      />

      <Divider />

      <TodoContainer>
        {filteredTodos.map((todo) => (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteTodo}
            footer={`Data de criação: ${formatDate(todo.createdAt)}`}
          />
        ))}
      </TodoContainer>
    </Container>
  );
}
