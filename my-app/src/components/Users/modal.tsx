"use cliente"

import React, { useState } from "react";
import Select from 'react-select'
import { UseUsersContext } from "@/contexts/Users/context";
import { IUsers } from "@/types/Users/users-type";
import { CustomModal, ModalButton, ModalInput, ModalTitle } from "@/styles/Users";
import { occupationOption } from "@/utils/occupation-area-options";

interface ModalProps {
  isOpen: boolean;
  user: IUsers | undefined;
  closeModal: () => void;
}

export function ModalEditUser({ isOpen, user, closeModal }: ModalProps) {
  const { users, updateData, fetchData, name, setName, email, setEmail } = UseUsersContext();
  const [selectValue, setSelectValue] = useState(0);

  const selectedOccupationOption = occupationOption.find((e) => e.value === selectValue);

  function handleSelect (event: any) {
    setSelectValue(Number(event.value))
  }

  const response = users?.find(item => item.id === user?.id);;


  function handleUpdateUser (event: any) {
    event.preventDefault();

    const occupationArea = occupationOption[selectValue].label;

    updateData(response?.id, { name, occupationArea });

    setName('');
    setEmail('');
    fetchData();
    closeModal();
  };

  return (
    <CustomModal isOpen={isOpen} onRequestClose={closeModal}>
      <ModalTitle>Editar Usuário</ModalTitle>
      <ModalInput
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ModalInput
        type="email"
        placeholder="Email"
        value={email}
        disabled
      />
      <Select
        options={occupationOption}
        value={selectedOccupationOption}
        onChange={handleSelect}
      />
      <ModalButton type="submit" onClick={handleUpdateUser}>Salvar</ModalButton>
    </CustomModal>
  );
};
