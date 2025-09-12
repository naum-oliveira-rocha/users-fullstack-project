import Modal from "react-modal";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 200px;
  border-radius: 8px;
  outline: none;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ModalInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
`;

export const ModalButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #2c73d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;