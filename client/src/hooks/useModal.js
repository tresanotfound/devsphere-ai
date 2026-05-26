import { useState } from 'react';

function useModal() {

  const [isOpen, setIsOpen]
    = useState(false);

  return {

    isOpen,

    openModal: () => setIsOpen(true),

    closeModal: () => setIsOpen(false),

  };
}

export default useModal;