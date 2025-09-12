import styled from "styled-components";

export const TableContainer = styled.table`
  width: 1000px;
  background-color: #fff;
  padding: 30px;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  text-align: left;
`;

export const Tbody = styled.tbody`
  text-align: left;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Th = styled.th`
  padding: 10px;
  &:nth-child(4),
  &:nth-child(5) {
    width: 60px;
  }
`;

export const Td = styled.td`
  padding: 15px 20px;
`;

export const TdIcon = styled.td`
  padding: 15px 20px;
  vertical-align: middle;
`;

export const DeleteButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  font-family: Arial, sans-serif;
  padding: 5px 10px;
  border: 1px solid transparent;
  cursor: pointer;
`;

export const ConfirmDeleteButton = styled(DeleteButton)`
  color: green;
`;

export const CancelButton = styled(DeleteButton)`
  color: red;
`;

export  const ConfirmDeleteRow = styled.tr`
  background-color: #f2f2f2;
`;

export const ConfirmDeleteTd = styled.td`
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

export const NoUserTr = styled.tr`
  text-align: center;
  background-color: #f5f5f5;
`;

export const NoUserTd = styled.td`
  padding: 20px;
  font-weight: bold;
`;