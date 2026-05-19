import TicketList from "../components/TicketList";
import { seedTickets } from "../data/seedTickets";

export function TicketPage() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Frontend Candidate Test</p>
        <h1>Mini Issue Tracker</h1>
      </section>

      <section className="tickets-layout">
        <TicketList tickets={seedTickets} />
      </section>
    </main>
  );
}
