import { useCallback } from 'react';
import { TodoItem, todoListMock } from '../data/mock';

const LOCAL_STORAGE_KEY = 'todoList';

export const useTodoDataLocalStorage = () => {
  const getTodosFromLocalStorage = useCallback((): TodoItem[] => {
    if (typeof window === 'undefined') return todoListMock;

    try {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (storedData) {
        const parsedData = JSON.parse(storedData);

        return parsedData.map((item: TodoItem & { createdAt: string }) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }));
      }
    } catch (error) {
      console.error('Erro ao carregar dados do localStorage:', error);
    }

    return todoListMock;
  }, []);

  const saveTodosToLocalStorage = useCallback((data: TodoItem[]) => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar dados no localStorage:', error);
    }
  }, []);

  return {
    getTodosFromLocalStorage,
    saveTodosToLocalStorage,
  };
};
