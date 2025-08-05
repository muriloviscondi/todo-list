'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { SearchFilter } from '@/app/components/SearchFilter';
import { TodoForm } from '@/app/components/TodoForm';
import { TodoItem as TodoItemComponent } from '@/app/components/TodoItem';
import { Container } from '@/app/components/layout';
import { TodoItem } from '@/app/types/todo';
import { formatDate } from '@/app/utils';
import styles from './TodoList.module.scss';

type TaskFilterType = 'all' | 'pending' | 'concluded';

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
      <h1 className={styles.title}>Lista de Tarefas</h1>

      <TodoForm onCreateTodo={handleCreateTodo} />

      <hr className={styles.divider} />

      <SearchFilter
        searchTerm={searchTerm}
        filterType={filterType}
        onSearchChange={setSearchTerm}
        onFilterChange={setFilterType}
      />

      <hr className={styles.divider} />

      <div className={styles.todoContainer}>
        {filteredTodos.map((todo) => (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteTodo}
            footer={`Data de criação: ${formatDate(todo.createdAt)}`}
          />
        ))}
      </div>
    </Container>
  );
}
