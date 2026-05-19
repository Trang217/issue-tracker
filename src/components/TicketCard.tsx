import type { Ticket } from "../types/ticket";

interface TicketCardProps {
  ticket: Ticket;
  selectedTicketId: string | null;
  onSelectedTicket: (ticketId: string) => void;
}
export default function TicketCard({
  ticket,
  selectedTicketId,
  onSelectedTicket,
}: TicketCardProps) {
  function handleSelectionChange() {
    onSelectedTicket(ticket.id);
  }
  return (
    <article
      className={`ticket-card ${selectedTicketId === ticket.id ? "selected-ticket" : ""}`}
      onClick={handleSelectionChange}
    >
      <p className="ticket-card-title">{ticket.title}</p>
    </article>
  );
}
