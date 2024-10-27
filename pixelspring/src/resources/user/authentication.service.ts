import { jwtDecode } from "jwt-decode";
import {
  AccessToken,
  Credentials,
  User,
  UserSessionToken,
} from "./user.resource";

class AuthService {
  baseURL: string = process.env.NEXT_PUBLIC_API_URL + "/v1/users";
  static AUTH_PARAM: string = "_auth";

  //POST
  async authenticate(credentials: Credentials): Promise<AccessToken> {
    const response = await fetch(this.baseURL + "/auth", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.status == 401) {
      throw new Error("User or password ar incorrect!");
    }

    return await response.json();
  }

  //SAVE
  async save(user: User): Promise<void> {
    const response = await fetch(this.baseURL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.status == 409) {
      const responseError = await response.json();
      throw new Error(responseError.error);
    }
  }

  //inicia a sessao do usuário - usando jwt decode
  initSession(token: AccessToken) {
    if (token.accessToken) {
      const decodedToken: any = jwtDecode(token.accessToken);

      const userSessionToken: UserSessionToken = {
        accessToken: token.accessToken,
        email: decodedToken.sub,
        name: decodedToken.name,
        expiration: decodedToken.exp,
      };

      this.setUserSession(userSessionToken);
    }
  }

  //salva usuário na sessão
  setUserSession(userSessionToken: UserSessionToken) {
    try {
      localStorage.setItem(
        AuthService.AUTH_PARAM,
        JSON.stringify(userSessionToken)
      );
    } catch (error) {}
  }

  //recupera os dados da sessao do usuário
  getUserSession(): UserSessionToken | null {
    try {
      const authString = localStorage.getItem(AuthService.AUTH_PARAM);

      if (!authString) {
        return null;
      }

      const token: UserSessionToken = JSON.parse(authString);
      return token;
    } catch (error) {
      return null;
    }
  }

  //verifica se a sessao ainda é válida, se não expirou
  isSessionValid(): boolean {
    const userSession: UserSessionToken | null = this.getUserSession();

    if (!userSession) {
      return false;
    }

    const expiration: number | undefined = userSession.expiration;

    if (expiration) {
      const expirationDateInMillis = expiration * 1000;
      const isValid = new Date() < new Date(expirationDateInMillis);

      return isValid;
    }
    return false;
  }

  invalidateSession(): void {
    try {
      localStorage.removeItem(AuthService.AUTH_PARAM);
    } catch (error) {}
  }
}

export const useAuth = () => new AuthService();
