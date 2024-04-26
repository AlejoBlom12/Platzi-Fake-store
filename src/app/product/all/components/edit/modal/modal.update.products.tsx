import React from "react";
import '../../../../css/modal.css'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  closeModal: () => void; 
  children?: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose,  children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>X</button>
        {children} 
      </div>
    </div>
  );
};

export default Modal;