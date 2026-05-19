import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

interface FilterTicketsOption {
  status: TicketStatus | "all";
  priority: TicketPriority | "all";
}

export function filterTickets(tickets: Ticket[], options: FilterTicketsOption) {
  const { status, priority } = options;
  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus = status === "all" || status === ticket.status;
    const matchesPriority = priority === "all" || priority === ticket.priority;

    return matchesStatus && matchesPriority;
  });

  return filteredTickets;
}
