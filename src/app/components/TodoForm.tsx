'use client';

import { useState, useCallback } from 'react';

import styled from 'styled-components';
import { Input } from './ui/Input';
import { Button } from './ui/button';

interface TodoFormProps {
  onCreateTodo: (task: string) => void;
}

const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`;

const InputContainer = styled.div`
  flex: 1;
`;

export function TodoForm({ onCreateTodo }: TodoFormProps) {
  const [task, setTask] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (task.trim()) {
        onCreateTodo(task.trim());
        setTask('');
      }
    },
    [task, onCreateTodo]
  );

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </InputContainer>
      <Button type="submit" variant="primary">
        Adicionar
      </Button>
    </FormContainer>
  );
}
