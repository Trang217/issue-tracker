interface InputProps {
  as?: "input" | "textarea";
  label?: string;
  name?: string;
  inputValue: string;
  error?: string;
  type?: string;
  placeholder?: string;
  row?: number;
  onInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
}

export default function TicketInput({
  label,
  as = "input",
  name,
  inputValue,
  error,
  type = "text",
  row,
  placeholder,
  onInputChange,
}: InputProps) {
  if (as === "textarea") {
    return (
      <>
        <label htmlFor={name}>{label}:</label>
        <textarea
          className={`${error ? "error-input" : ""}`}
          id={name}
          name={name}
          value={inputValue}
          onChange={onInputChange}
          rows={row}
        />
      </>
    );
  }
  return (
    <>
      {label ? (
        <label htmlFor={name}>{label}:</label>
      ) : (
        ""
      )}
      <input
        className={`${error ? "error-input" : ""}`}
        type={type}
        id={name}
        name={name}
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </>
  );
}
