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
  {
    id: uuidv4(),
    task: 'Atualizar documentação',
    createdAt: new Date('2025-08-08T14:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Deploy para staging',
    createdAt: new Date('2025-08-05T20:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Limpeza do código',
    createdAt: new Date('2025-08-03T18:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Revisão do design',
    createdAt: new Date('2025-08-07T11:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Configurar analytics',
    createdAt: new Date('2025-08-06T16:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Refatorar sidebar',
    createdAt: new Date('2025-08-05T13:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Planejar campanha de marketing',
    createdAt: new Date('2025-08-10T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Feedback dos clientes',
    createdAt: new Date('2025-08-09T15:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Otimizar imagens',
    createdAt: new Date('2025-08-04T14:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Backup do banco de dados',
    createdAt: new Date('2025-08-05T22:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Escrever post do blog',
    createdAt: new Date('2025-08-11T10:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Atualizar dependências',
    createdAt: new Date('2025-08-06T17:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    task: 'Melhorar acessibilidade',
    createdAt: new Date('2025-08-07T12:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Preparar apresentação',
    createdAt: new Date('2025-08-08T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    task: 'Testar fluxo de pagamento',
    createdAt: new Date('2025-08-09T13:00:00'),
    status: 'pending',
  },
] as const;
