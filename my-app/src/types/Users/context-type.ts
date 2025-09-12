import { IUsers } from "./users-type";

export interface IUsersContextProvides {
  users: IUsers[] | undefined;
  fetchData: (param?: any, param2?: any) => Promise<void> | undefined;

  deletedUser: React.Dispatch<React.SetStateAction<number>> | null;
  deleteData: (param?: any, param2?: any) => Promise<void> | undefined,

  updatedUser: React.Dispatch<React.SetStateAction<number>> | null;
  updateData: (param?: any, param2?: any) => Promise<void> | undefined,

  createdUser: React.Dispatch<React.SetStateAction<string>> | null;
  createData: (param?: any, param2?: any) => Promise<void>

  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;

  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}