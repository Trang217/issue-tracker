import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

interface TicketDetailProps {
  ticket: Ticket;
  onStatusChange: (ticketId: string, status: TicketStatus) => void;
  onPriorityChange: (ticketId: string, priority: TicketPriority) => void;
}

export default function TicketDetail({
  ticket,
  onStatusChange,
  onPriorityChange,
}: TicketDetailProps) {
  const { description, createdBy, createdAt, status, priority } = ticket;

  function handleStatusUpdate(event: React.ChangeEvent<HTMLSelectElement>) {
    onStatusChange(ticket.id, event.target.value as TicketStatus);
  }

  function handlePriorityUpdate(event: React.ChangeEvent<HTMLSelectElement>) {
    onPriorityChange(ticket.id, event.target.value as TicketPriority);
  }

  return (
    <article>
      <div className="detail-item">
        <p className="label">Description:</p>
        <p> {description}</p>
      </div>

      <div className="detail-selection">
        <p className="label">Status:</p>
        <select
          name="status"
          id="status"
          value={status}
          onChange={handleStatusUpdate}
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="detail-selection">
        <p className="label">Priority:</p>
        <select
          name="priority"
          id="priority"
          value={priority}
          onChange={handlePriorityUpdate}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="detail-item">
        <p className="label">Created by:</p>
        <p> {createdBy}</p>
      </div>

      <div className="detail-item">
        <p className="label">Created at:</p>
        <p> {createdAt}</p>
      </div>
    </article>
  );
}
