import { v4 as uuidv4 } from 'uuid';

export type StatusType = 'concluded' | 'pending' | 'cancelled';

export interface TodoItem {
  id: string;
  task: string;
  createdAt: Date;
  status: StatusType;
}

export const todoListMock: TodoItem[] = [
  {
    id: uuidv4(),
    task: 'Finish Next.js project',
    createdAt: new Date('2025-08-05T17:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Review PR #42',
    createdAt: new Date('2025-08-04T12:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Team meeting',
    createdAt: new Date('2025-08-06T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Write unit tests',
    createdAt: new Date('2025-08-07T15:30:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Fix login bug',
    createdAt: new Date('2025-08-04T10:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Update documentation',
    createdAt: new Date('2025-08-08T14:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Deploy staging',
    createdAt: new Date('2025-08-05T20:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Code cleanup',
    createdAt: new Date('2025-08-03T18:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Design review',
    createdAt: new Date('2025-08-07T11:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Set up analytics',
    createdAt: new Date('2025-08-06T16:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Refactor sidebar',
    createdAt: new Date('2025-08-05T13:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Plan marketing campaign',
    createdAt: new Date('2025-08-10T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Customer feedback',
    createdAt: new Date('2025-08-09T15:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Optimize images',
    createdAt: new Date('2025-08-04T14:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Backup database',
    createdAt: new Date('2025-08-05T22:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Write blog post',
    createdAt: new Date('2025-08-11T10:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Update dependencies',
    createdAt: new Date('2025-08-06T17:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Improve accessibility',
    createdAt: new Date('2025-08-07T12:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Prepare presentation',
    createdAt: new Date('2025-08-08T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Test payment flow',
    createdAt: new Date('2025-08-09T13:00:00'),
    status: 'pending',
  },
] as const;
