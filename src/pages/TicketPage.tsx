import { useState } from "react";
import TicketList from "../components/TicketList";
import { seedTickets } from "../data/seedTickets";
import TicketFilter from "../components/TicketFilter";
import type { Ticket, TicketPriority, TicketStatus } from "../types/ticket";
import { filterTickets } from "../lib/filterTickets";
import TicketDetail from "../components/TicketDetail";

export function TicketPage() {
  const [tickets, setTickets] = useState<Ticket[]>(seedTickets);
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus | "all">(
    "all",
  );
  const [selectedPriority, setSelectedPriority] = useState<
    TicketPriority | "all"
  >("all");
  const [search, setSearch] = useState("");
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  const displayedTickets = filterTickets(tickets, {
    search,
    status: selectedStatus,
    priority: selectedPriority,
  });

  const selectedTicket = displayedTickets.find(
    (ticket) => ticket.id === selectedTicketId,
  );

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
          search={search}
          onStatusFilterChange={setSelectedStatus}
          onPriorityFilterChange={setSelectedPriority}
          onSearchChange={setSearch}
        />
      </section>

      <section className="ticket-layout">
        <TicketList
          tickets={displayedTickets}
          selectedTicketId={selectedTicketId}
          onSelectedTicket={setSelectedTicketId}
        />
        {displayedTickets.length > 0 && (
          <div className="ticket-container">
            {selectedTicket ? (
              <TicketDetail
                ticket={selectedTicket}
                onStatusChange={updateTicketStatus}
                onPriorityChange={updateTicketPriority}
              />
            ) : (
              <p>Select Ticket for more Details</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
