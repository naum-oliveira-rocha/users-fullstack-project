'use client'

import { styled } from 'styled-components'
import { Form } from '@/components/Users/form';
import { Table } from '@/components/Users/table';
import { UsersContextProvider } from '@/contexts/Users/context';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

export default function Home() {
  return (
    <UsersContextProvider>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form/>
        <Table/>
      </Container>
    </UsersContextProvider> 
  );
}
