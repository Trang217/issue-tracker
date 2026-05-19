import {
  SortOption,
  Ticket,
  TicketPriority,
  TicketStatus,
} from "../types/ticket";

interface FilterTicketsOption {
  status: TicketStatus | "all";
  priority: TicketPriority | "all";
  search: string;
  sortBy: SortOption;
}

const PRIORITY_ORDER = {
  low: 1,
  medium: 2,
  high: 3,
};

export function filterTickets(tickets: Ticket[], options: FilterTicketsOption) {
  const { status, priority, search, sortBy } = options;
  const trimmedSearch = search.toLowerCase().trim();
  const filteredTickets = tickets
    .filter((ticket) => {
      const matchesSearch =
        ticket.title.toLowerCase().includes(trimmedSearch) ||
        ticket.createdBy.toLowerCase().includes(trimmedSearch);
      const matchesStatus = status === "all" || status === ticket.status;
      const matchesPriority =
        priority === "all" || priority === ticket.priority;

      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }

      if (sortBy === "oldest") {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }

      if (sortBy === "lower-priority") {
        return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
      }

      return PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority];
    });

  return filteredTickets;
}
