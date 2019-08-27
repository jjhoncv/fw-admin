import { UserModel } from "../../models/User";

export const hydrateUser = (data: any): UserModel => {

  let user = {
    id: 0,
    name: '',
    surname: '',
    mail: '',
    photo: '',
    login: '',
    password: '',
    token: ''
  };

  if (data.data) {
    user.id = data.data.id;
    user.name = data.data.name;
    user.surname = data.data.surname;
    user.mail = data.data.mail;
    user.photo = data.data.photo;
    user.login = data.data.login;
    user.password = data.data.password;
    user.token = data.data.token;
  }

  const dataHydrate: UserModel = {
    code: data.code,
    message: data.message,
    user: user
  };

  return dataHydrate;
}
