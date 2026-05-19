import { Ticket } from "../types/ticket";
import TicketCard from "./TicketCard";

interface TicketListProps {
  tickets: Ticket[];
  selectedTicketId: string | null;
  onSelectedTicket: (ticketId: string) => void;
}

export default function TicketList({
  tickets,
  selectedTicketId,
  onSelectedTicket,
}: TicketListProps) {
  if (tickets.length === 0) {
    return <p>No ticket found!</p>;
  }
  return (
    <div className="ticket-container">
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <TicketCard
            ticket={ticket}
            selectedTicketId={selectedTicketId}
            onSelectedTicket={onSelectedTicket}
          />
        </div>
      ))}
    </div>
  );
}
