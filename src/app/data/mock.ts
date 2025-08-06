import { v4 as uuidv4 } from 'uuid';

export type StatusType = 'concluded' | 'pending';

export interface TodoItem {
  id: string;
  task: string;
  createdAt: Date;
  status: StatusType;
}

export const todoListMock: TodoItem[] = [
  {
    id: uuidv4(),
    task: 'Finalizar projeto Next.js',
    createdAt: new Date('2025-08-05T17:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Revisar PR #42',
    createdAt: new Date('2025-08-04T12:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Reunião da equipe',
    createdAt: new Date('2025-08-06T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Escrever testes unitários',
    createdAt: new Date('2025-08-07T15:30:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Corrigir bug do login',
    createdAt: new Date('2025-08-04T10:00:00'),
    status: 'concluded',
  },
] as const;
