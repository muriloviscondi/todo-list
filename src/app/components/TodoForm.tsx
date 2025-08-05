'use client';

import React, { useState, useCallback } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/button';
import styles from './TodoForm.module.scss';

interface TodoFormProps {
  onCreateTodo: (task: string) => void;
}

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
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <Input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant="primary">
        Adicionar
      </Button>
    </form>
  );
}
