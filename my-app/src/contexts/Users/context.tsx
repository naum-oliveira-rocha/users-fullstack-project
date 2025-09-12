"use client"

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { IUsers, IUsersContextProvides } from "@/types/Users";

const UsersContext = createContext<IUsersContextProvides | undefined>(undefined);

interface ProviderProps {
    children: ReactNode
}

export function UsersContextProvider({ children }: ProviderProps){
    const [users, setUsers] = useState();
    const [createdUser, setCreatedUser] = useState(null);
    const [deletedUser, setDeletedUser] = useState(null);
    const [updatedUser, setUpdatedUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function createData (data: IUsers) {
        try {
            const response = await axios.post("http://localhost:3333/api/users", data);
            if (response.status === 201) {
                setCreatedUser(response.data.response);
                fetchData();
            }
        } catch (error) {
            console.error(error, { action: 'createData' });
        }
    };

    async function fetchData () {
        try {
            const response = await axios.get("http://localhost:3333/api/users");
            if (response.status === 200) {
                setUsers(response.data.response);
            }
        } catch (error) {
            console.error(error, { action: 'fetchData' });
        }
    };

    async function deleteData (id: number) {
        try {
            const response = await axios.delete(`http://localhost:3333/api/users/${id}`);
            if (response.status === 200) {
                setUsers(users.filter(user => user.id !== id));
            }
        } catch (error) {
            console.error(error, { action: 'deleteData' });
        }
    };

    async function updateData (id: number, data: { name: string, occupationArea: string}) {
        try {
            const response = await axios.put(`http://localhost:3333/api/users/${id}`, data);
            if (response.status === 201) {
                fetchData();
            }
        } catch (error) {
            console.error(error, { action: 'updateData' });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const provider = {
        users, // estado
        fetchData, // funcao
        deletedUser, // estado
        deleteData, // função
        updatedUser, // estado
        updateData, // função
        createdUser, // estado
        createData, // funcao,
        name, // estado,
        setName, // estado,
        email, // estado,
        setEmail // estado,
    };

    return(
        <UsersContext.Provider value={provider}>
            {children}
        </UsersContext.Provider>
    )
}

export function UseUsersContext(): IUsersContextProvides {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error('UseUsers must be used within a UserProvider');
    }
    return context;
}
