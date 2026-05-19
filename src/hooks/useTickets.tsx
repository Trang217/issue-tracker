import { useEffect, useState } from "react";
import { seedTickets } from "../data/seedTickets";
import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

const STORAGE_TICKETS = "tickets";
type TicketFormData = Omit<Ticket, "id" | "createdAt">;
export default function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    const savedTickets = localStorage.getItem(STORAGE_TICKETS);
    return savedTickets ? (JSON.parse(savedTickets) as Ticket[]) : seedTickets;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_TICKETS, JSON.stringify(tickets));
  }, [tickets]);

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
