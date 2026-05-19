import { useState } from "react";
import { seedTickets } from "../data/seedTickets";
import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

type TicketFormData = Omit<Ticket, "id" | "createdAt">;
export default function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>(seedTickets);

  function createTicket(data: TicketFormData) {
    const newTicketId: string = `Ticket-${tickets.length + 1}`;
    const newTicket: Ticket = {
      ...data,
      id: newTicketId,
      createdAt: new Date().toISOString(),
    };

    setTickets((currenTickets) => [...currenTickets, newTicket]);

    return newTicket;
  }

  function updateTicketStatus(ticketId: string, status: TicketStatus) {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status } : ticket,
      ),
    );
  }

  function updateTicketPriority(ticketId: string, priority: TicketPriority) {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, priority } : ticket,
      ),
    );
  }

  return { tickets, createTicket, updateTicketStatus, updateTicketPriority };
}
