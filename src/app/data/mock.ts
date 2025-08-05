import { v4 as uuidv4 } from 'uuid';

export type StatusType = 'concluded' | 'pending' | 'cancelled';

export interface TodoItem {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  status: StatusType;
}

export const todoListMock: TodoItem[] = [
  {
    id: uuidv4(),
    title: 'Finish Next.js project',
    description: 'Complete all pages and API routes.',
    createdAt: new Date('2025-08-05T17:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Review PR #42',
    description: 'Check code quality and write comments.',
    createdAt: new Date('2025-08-04T12:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    title: 'Team meeting',
    description: 'Discuss roadmap and next milestones.',
    createdAt: new Date('2025-08-06T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Write unit tests',
    description: 'Add tests for the new components.',
    createdAt: new Date('2025-08-07T15:30:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Fix login bug',
    description: 'Resolve issue with session expiration.',
    createdAt: new Date('2025-08-04T10:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    title: 'Update documentation',
    description: 'Add usage examples for the new API.',
    createdAt: new Date('2025-08-08T14:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Deploy staging',
    description: 'Deploy latest build to staging environment.',
    createdAt: new Date('2025-08-05T20:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Code cleanup',
    description: 'Remove unused imports and variables.',
    createdAt: new Date('2025-08-03T18:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    title: 'Design review',
    description: 'Review new UI mockups with design team.',
    createdAt: new Date('2025-08-07T11:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Set up analytics',
    description: 'Integrate Google Analytics in the app.',
    createdAt: new Date('2025-08-06T16:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Refactor sidebar',
    description: 'Make sidebar responsive and accessible.',
    createdAt: new Date('2025-08-05T13:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    title: 'Plan marketing campaign',
    description: 'Outline strategy for next quarter launch.',
    createdAt: new Date('2025-08-10T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Customer feedback',
    description: 'Analyze feedback from beta testers.',
    createdAt: new Date('2025-08-09T15:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Optimize images',
    description: 'Compress and lazy-load images on homepage.',
    createdAt: new Date('2025-08-04T14:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    title: 'Backup database',
    description: 'Create a backup before deployment.',
    createdAt: new Date('2025-08-05T22:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Write blog post',
    description: 'Publish article about new features.',
    createdAt: new Date('2025-08-11T10:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Update dependencies',
    description: 'Upgrade packages to latest versions.',
    createdAt: new Date('2025-08-06T17:00:00'),
    status: 'concluded',
  },
  {
    id: uuidv4(),
    title: 'Improve accessibility',
    description: 'Fix ARIA labels and keyboard navigation.',
    createdAt: new Date('2025-08-07T12:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Prepare presentation',
    description: 'Create slides for stakeholder meeting.',
    createdAt: new Date('2025-08-08T09:00:00'),
    status: 'pending',
  },
  {
    id: uuidv4(),
    title: 'Test payment flow',
    description: 'Ensure checkout works with all payment methods.',
    createdAt: new Date('2025-08-09T13:00:00'),
    status: 'pending',
  },
] as const;
