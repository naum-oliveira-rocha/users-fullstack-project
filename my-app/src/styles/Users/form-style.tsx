import styled from "styled-components";
import Select from 'react-select'

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'arial';
  margin-right: 20px;
`;

export const Input = styled.input`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  height: 36px;
  outline: none;
`;

export const Label = styled.label``;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 40px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
  text-align: center
`;

export const CustomSelect = styled(Select)`
  width: 200px
`;