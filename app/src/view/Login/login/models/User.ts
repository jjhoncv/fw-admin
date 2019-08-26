export interface User {
    id: number;
    name: string;
    surname: string;
    mail: string;
    photo: string;
    login: string;
    password: string;
    token: string;
}

export interface UserModel {
    code: number;
    message: string;
    user?: User;
  };
  