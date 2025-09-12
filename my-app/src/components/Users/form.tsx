"use client"

import { UseUsersContext } from "@/contexts/Users/context";
import { UsersSchema } from "@/validators/Users";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  CustomSelect,
  ErrorMessage,
  FormContainer,
  Input,
  InputArea,
  Label,
} from "@/styles/Users";
import { occupationOption } from "@/utils/occupation-area-options";

type FormProps = z.infer<typeof UsersSchema>;

export function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(UsersSchema),
  });
  const { createData } = UseUsersContext();
  const [selectValue, setSelectValue] = useState(0);

  const selectedOccupationOption = occupationOption.find((e) => e.value === selectValue);

  function handleSelect (event: any) {
    setSelectValue(Number(event.value))
  }

  async function handleCreate (data: FormProps) {
    const occupationArea = occupationOption[selectValue].label;

    setSelectValue(0);

    createData({
      name: data.name,
      email: data.email,
      occupationArea
    });

    reset();
  }

  return (
    <>
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <FormContainer onSubmit={handleSubmit(handleCreate)}>
        <InputArea>
          <Label>Nome</Label>
          <Input {...register('name')}/>
        </InputArea>

        <InputArea>
          <Label>Email</Label>
          <Input {...register('email')}/>
        </InputArea>

        <InputArea>
          <Label>Área</Label>
          <CustomSelect
            options={occupationOption}
            value={selectedOccupationOption}
            onChange={handleSelect}
          />
        </InputArea>

        <Button type="submit">Cadastrar</Button>
      </FormContainer>
    </>
  )
}
