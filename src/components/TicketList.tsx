import { Ticket } from "../types/ticket";
import TicketCard from "./TicketCard";

interface TicketListProps {
  tickets: Ticket[];
}

export default function TicketList({ tickets }: TicketListProps) {
  if (tickets.length === 0) {
    return <p>No ticket found!</p>;
  }
  return (
    <div className="hero-card ">
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <TicketCard ticket={ticket} />
        </div>
      ))}
    </div>
  );
}
