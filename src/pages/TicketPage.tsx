import { useState } from "react";
import TicketList from "../components/TicketList";
import { seedTickets } from "../data/seedTickets";
import TicketFilter from "../components/TicketFilter";
import type { Ticket, TicketPriority, TicketStatus } from "../types/ticket";
import { filterTickets } from "../lib/filterTickets";

export function TicketPage() {
  const [tickets, setTickets] = useState<Ticket[]>(seedTickets);
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus | "all">(
    "all",
  );
  const [selectedPriority, setSelectedPriority] = useState<
    TicketPriority | "all"
  >("all");

  const displayedTickets = filterTickets(tickets, {
    status: selectedStatus,
    priority: selectedPriority,
  });

  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Frontend Candidate Test</p>
        <h1>Mini Issue Tracker</h1>
      </section>

      <section>
        <TicketFilter
          status={selectedStatus}
          priority={selectedPriority}
          onStatusFilterChange={setSelectedStatus}
          onPriorityFilterChange={setSelectedPriority}
        />
      </section>

      <section className="tickets-layout">
        <TicketList tickets={displayedTickets} />
      </section>
    </main>
  );
}
