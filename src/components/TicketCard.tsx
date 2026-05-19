import { Ticket } from "../types/ticket";

interface TicketCardProps {
  ticket: Ticket;
}
export default function TicketCard({ ticket }: TicketCardProps) {
  return (
    <article className="ticket-card">
      <p>{ticket.title}</p>
    </article>
  );
}
