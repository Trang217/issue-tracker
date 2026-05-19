import React from "react";
import { TicketPriority, TicketStatus } from "../types/ticket";

interface TicketFilterProps {
  status: TicketStatus | "all";
  priority: TicketPriority | "all";
  onStatusFilterChange: (status: TicketStatus | "all") => void;
  onPriorityFilterChange: (priority: TicketPriority | "all") => void;
}

export default function TicketFilter({
  status,
  priority,
  onStatusFilterChange,
  onPriorityFilterChange,
}: TicketFilterProps) {
  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onStatusFilterChange(event.target.value as TicketStatus | "all");
  }

  function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onPriorityFilterChange(event.target.value as TicketPriority | "all");
  }

  return (
    <div className="ticket-filter">
      <div className="ticket-filter-group">
        <label htmlFor="status">Status:</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="ticket-filter-group">
        <label htmlFor="status">Priority:</label>
        <select
          name="priority"
          id="priority"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}
