import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="modal-wrapper">
      <div className="modal-content"> {children}</div>
    </div>
  );
}
