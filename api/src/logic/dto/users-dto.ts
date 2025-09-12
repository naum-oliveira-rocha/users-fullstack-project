export interface UsersDTO {
    id?: number;
    name: string;
    email: string;
    occupationArea: string;
}

export interface UsersUpdateDTO {
    id: number;
    name: string;
    occupationArea: string;
}
