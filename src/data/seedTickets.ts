import type { Ticket } from '../types/ticket';

export const seedTickets: Ticket[] = [
  {
    id: 'ticket-1',
    title: 'Implement ticket list',
    description: 'Render all tickets in a clear and usable list.',
    status: 'open',
    priority: 'high',
    createdBy: 'Product Team',
    createdAt: '2026-05-01T09:00:00.000Z',
  },
  {
    id: 'ticket-2',
    title: 'Add filter controls',
    description: 'Allow filtering by status, priority, and text search.',
    status: 'in_progress',
    priority: 'medium',
    createdBy: 'QA Team',
    createdAt: '2026-05-02T11:30:00.000Z',
  },
];
