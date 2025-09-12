"use client"

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IUsers } from "@/types/Users/users-type";
import { UseUsersContext } from "@/contexts/Users/context";
import React from "react";
import { 
  CancelButton,
  ConfirmDeleteButton,
  ConfirmDeleteRow,
  ConfirmDeleteTd,
  DeleteButtonsWrapper,
  NoUserTd,
  NoUserTr,
  TableContainer,
  Tbody,
  Td,
  TdIcon,
  Th,
  Thead,
  Tr,
 } from "@/styles/Users";
import { ModalEditUser } from "./modal";

export function Table() {
  const { users, deleteData, setName, setEmail } = UseUsersContext();
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const [editUserId, setEditUserId] = useState<number | null>(null);

  function clickDelete (id: number) {
    setConfirmDelete(id);
  };

  function confirmDeleteUser (id: number) {
    deleteData(id);
    setConfirmDelete(null);
  };

  function clickEdit (id: number, email: string, name: string) {
    setEditUserId(id);
    setEmail(email);
    setName(name);
  };

  function closeModal () {
    setEditUserId(null);
  };

  return (
    <TableContainer>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Área</Th>
          <Th>Editar</Th>
          <Th>Excluir</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((item: IUsers) => (
            <React.Fragment key={item.id}>
              <Tr>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.occupationArea}</Td>
                <TdIcon>
                  <FaEdit 
                    onClick={() => clickEdit(item.id, item.email, item.name)}
                    style={{ cursor: 'pointer' }}
                  />
                </TdIcon>
                <TdIcon>
                  <FaTrash 
                    onClick={() => clickDelete(item.id)} 
                    style={{ cursor: 'pointer' }}
                  />
                </TdIcon>
              </Tr>
              {confirmDelete === item.id && (
                <ConfirmDeleteRow>
                  <ConfirmDeleteTd colSpan={5}>
                    <p>Tem certeza que deseja excluir este usuário?</p>
                    <DeleteButtonsWrapper>
                      <ConfirmDeleteButton onClick={() => confirmDeleteUser(confirmDelete)}>
                        Sim
                      </ConfirmDeleteButton>
                      <CancelButton onClick={() => setConfirmDelete(null)}>Cancelar</CancelButton>
                    </DeleteButtonsWrapper>
                  </ConfirmDeleteTd>
                </ConfirmDeleteRow>
              )}
            </React.Fragment>
          ))
        ) : (
          <NoUserTr>
            <NoUserTd colSpan={5}>Nenhum usuário cadastrado!</NoUserTd>
          </NoUserTr>
        )}
      </Tbody>
      <ModalEditUser
        isOpen={editUserId !== null}
        closeModal={closeModal}
        user={users && users.find((user: IUsers) => user.id === editUserId)}
      />
    </TableContainer>
  );
}