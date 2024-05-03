export interface IUser{
    id: string;
    username: string;
    email: string;
    address: string;
}

export interface ICustomRequest{
    user: IUser
    file: object
    params: object
    query: object
    path: object
}

export interface ISignIn {
    email: string;
    password: string;
}