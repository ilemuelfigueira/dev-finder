import axios from "axios";

export async function autentication(username: string, password: string) {
  const payload = {
    username,
    password,
  };
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, payload);

  return data;
}
