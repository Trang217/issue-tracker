import { useState } from "react";
import type { Ticket } from "../types/ticket";

type TicketFormData = Omit<Ticket, "id" | "createdAt">;
interface TicketFormProps {
  onCloseTicketForm: () => void;
  onCreateNewTicket: (formData: TicketFormData) => void;
}
const initialFormData: TicketFormData = {
  title: "",
  description: "",
  createdBy: "",
  status: "open",
  priority: "low",
};

export default function TicketForm({
  onCloseTicketForm,
  onCreateNewTicket,
}: TicketFormProps) {
  const [formData, setFormData] = useState<TicketFormData>(initialFormData);
  const [titleError, setTitleError] = useState("");
  const { title, description, createdBy, status, priority } = formData;

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData((currentFormData) => {
      const { name, value } = event.target;

      if (name === "title") {
        setTitleError("");
      }

      return { ...currentFormData, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title) {
      setTitleError("Title is missing!");
      return;
    }
    onCreateNewTicket(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Ticket</h2>
      {titleError && (
        <p className="error-text" role="alert">
          {titleError}
        </p>
      )}
      <div className="form-element">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
          className={`${titleError ? "error-input" : ""}`}
        />
      </div>

      <div className="form-element">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="form-element">
        <label htmlFor="createdBy">Created by:</label>
        <input
          type="text"
          name="createdBy"
          id="createdBy"
          value={createdBy}
          onChange={handleChange}
        />
      </div>

      <div className="form-element">
        <label htmlFor="priority">Priority:</label>
        <select
          name="priority"
          id="priority"
          value={priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-element">
        <label htmlFor="status">Status:</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={handleChange}
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="button-group">
        <button type="submit">Create</button>
        <button type="button" onClick={onCloseTicketForm}>
          Cancel
        </button>
      </div>
    </form>
  );
}
