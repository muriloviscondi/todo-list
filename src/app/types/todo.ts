export type StatusType = 'concluded' | 'pending';

export interface TodoItem {
  id: string;
  task: string;
  createdAt: Date;
  status: StatusType;
} 