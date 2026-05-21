import React from "react";
import type {
  SortOption,
  TicketPriority,
  TicketStatus,
} from "../types/ticket";
import TicketInput from "./TicketInput";

interface TicketFilterProps {
  status: TicketStatus | "all";
  priority: TicketPriority | "all";
  search: string;
  sortBy: SortOption;
  onStatusFilterChange: (
    status: TicketStatus | "all",
  ) => void;
  onPriorityFilterChange: (
    priority: TicketPriority | "all",
  ) => void;
  onSearchChange: (search: string) => void;
  onSortChange: (sortBy: SortOption) => void;
}

export default function TicketFilter({
  status,
  priority,
  search,
  sortBy,
  onSortChange,
  onStatusFilterChange,
  onPriorityFilterChange,
  onSearchChange,
}: TicketFilterProps) {
  function handleStatusChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    onStatusFilterChange(
      event.target.value as TicketStatus | "all",
    );
  }

  function handlePriorityChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    onPriorityFilterChange(
      event.target.value as
        | TicketPriority
        | "all",
    );
  }

  function handleSortChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    onSortChange(
      event.target.value as SortOption,
    );
  }

  function handleSearchChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="ticket-filter">
      <div>
        <TicketInput
          type="text"
          placeholder="Searching ticket..."
          inputValue={search}
          onInputChange={handleSearchChange}
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
          <option value="in_progress">
            In Progress
          </option>
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

      <div className="ticket-filter-group">
        <label htmlFor="status">Sort by:</label>
        <select
          name="sortBy"
          id="sortBy"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="higher-priority">
            Higher Priority
          </option>
          <option value="lower-priority">
            Lower Priority
          </option>
        </select>
      </div>
    </div>
  );
}
