import React from "react";
import { TicketPriority, TicketStatus } from "../types/ticket";

interface TicketFilterProps {
  status: TicketStatus | "all";
  priority: TicketPriority | "all";
  search: string;
  onStatusFilterChange: (status: TicketStatus | "all") => void;
  onPriorityFilterChange: (priority: TicketPriority | "all") => void;
  onSearchChange: (search: string) => void;
}

export default function TicketFilter({
  status,
  priority,
  search,
  onStatusFilterChange,
  onPriorityFilterChange,
  onSearchChange,
}: TicketFilterProps) {
  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onStatusFilterChange(event.target.value as TicketStatus | "all");
  }

  function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onPriorityFilterChange(event.target.value as TicketPriority | "all");
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="ticket-filter">
      <div>
        <input
          type="text"
          placeholder="Searching ticket..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
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
