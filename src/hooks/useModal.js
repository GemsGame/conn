import React, { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(
    { addProject: false, editProject: false, deleteProject: false });
  const open = (name) => () => {
    setIsOpen({ ...isOpen, [name]: true });
  };
  const close = (name) => () => {
    setIsOpen({ ...isOpen, [name]: false });
  };

  return {
    isOpen,
    open,
    close,
  };
};


export default useModal;
