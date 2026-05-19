import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

interface FilterTicketsOption {
  status: TicketStatus | "all";
  priority: TicketPriority | "all";
  search: string;
}

export function filterTickets(tickets: Ticket[], options: FilterTicketsOption) {
  const { status, priority, search } = options;
  const trimmedSearch = search.toLowerCase().trim();
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(trimmedSearch) ||
      ticket.createdBy.toLowerCase().includes(trimmedSearch);
    const matchesStatus = status === "all" || status === ticket.status;
    const matchesPriority = priority === "all" || priority === ticket.priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return filteredTickets;
}
