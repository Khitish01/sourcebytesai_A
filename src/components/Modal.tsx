// components/Modal.tsx
import { X } from "lucide-react";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-3/4 max-h-[80vh] overflow-y-auto">
                <button onClick={onClose} className=" text-black absolute top-2 right-2">

                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;