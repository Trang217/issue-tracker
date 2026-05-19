import { useState } from "react";
import TicketList from "../components/TicketList";
import TicketFilter from "../components/TicketFilter";
import {
  SortOption,
  type Ticket,
  type TicketPriority,
  type TicketStatus,
} from "../types/ticket";
import { filterTickets } from "../lib/filterTickets";
import TicketDetail from "../components/TicketDetail";
import Modal from "../components/Modal";
import TicketForm from "../components/TicketForm";
import useTickets from "../hooks/useTickets";

type TicketFormData = Omit<Ticket, "id" | "createdAt">;

export function TicketPage() {
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus | "all">(
    "all",
  );
  const [selectedPriority, setSelectedPriority] = useState<
    TicketPriority | "all"
  >("all");
  const [search, setSearch] = useState("");
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const { tickets, createTicket, updateTicketPriority, updateTicketStatus } =
    useTickets();

  const displayedTickets = filterTickets(tickets, {
    search,
    status: selectedStatus,
    priority: selectedPriority,
    sortBy,
  });

  const selectedTicket = displayedTickets.find(
    (ticket) => ticket.id === selectedTicketId,
  );

  function handleCloseTicketModal() {
    setIsTicketModalOpen(false);
  }

  function createNewTicket(data: TicketFormData) {
    const newTicket = createTicket(data);
    setSelectedTicketId(newTicket.id);
    setIsTicketModalOpen(false);
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Frontend Candidate Test</p>
        <h1>Mini Issue Tracker</h1>
      </section>

      <section>
        <button onClick={() => setIsTicketModalOpen(true)}>
          Create New Ticket
        </button>
        <TicketFilter
          status={selectedStatus}
          priority={selectedPriority}
          search={search}
          onStatusFilterChange={setSelectedStatus}
          onPriorityFilterChange={setSelectedPriority}
          onSearchChange={setSearch}
          sortBy={sortBy}
          onSortChange={setSortBy}
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
      {isTicketModalOpen && (
        <Modal>
          <TicketForm
            onCloseTicketForm={handleCloseTicketModal}
            onCreateNewTicket={createNewTicket}
          />
        </Modal>
      )}
    </main>
  );
}
