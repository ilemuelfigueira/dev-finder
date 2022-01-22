import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { autentication } from "services/api";

import axios from "axios";

export type IUser = {
  id: any;
  name: string;
  avatar: string;
};

export interface IAuth {
  user: IUser | undefined;
  signed: boolean;
  // eslint-disable-next-line no-unused-vars
  Login: (username: string, password: string) => Promise<IUser>;
  Logout: () => void;
}

export const AuthContext = createContext<IAuth>({} as any);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>();

  const history = useHistory();

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("@App:user");
    const storagedToken = sessionStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      const { accessId, fullName } = JSON.parse(storagedUser);
      setUser({
        avatar: "",
        id: accessId,
        name: fullName,
      });
      axios.defaults.headers.Authorization = `${storagedToken}`;
    }
  }, []);

  async function Login(username: string, password: string): Promise<IUser> {
    const { validatedUser: user, access_token } = await autentication(username, password);

    sessionStorage.setItem("@App:user", JSON.stringify(user));
    sessionStorage.setItem("@App:token", JSON.stringify(access_token));

    alert(`Bem vindo ${user.fullName}`);

    const newUser = {
      avatar: "",
      id: `${user.accessId}`,
      name: `${user.fullName}`,
    };

    setUser(newUser);

    return newUser;
  }

  function Logout() {
    localStorage.removeItem("bearer");
    localStorage.removeItem("businessId");
    localStorage.removeItem("userTypeId");
    localStorage.removeItem("bearer2");
    sessionStorage.removeItem("@App:user");
    sessionStorage.removeItem("@App:token");
    setUser({ avatar: "", id: "", name: "" });

    history.push("/");
    window.location.reload();
  }

  return <AuthContext.Provider value={{ user, signed: Boolean(user), Login, Logout }}>{children}</AuthContext.Provider>;
};
