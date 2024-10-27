//CADASTRO DO USUÁRIO
export class User {
  name?: string;
  email?: string;
  password?: string;
}

//LOGIN
export class Credentials {
  email?: string;
  password?: string;
}

export class AccessToken {
  accessToken?: string;
}

//PARA REPRESENTAR UMA SESSÃO USUÁRIO
export class UserSessionToken {
  name?: string;
  email?: string;
  accessToken?: string;
  expiration?: number;
}
