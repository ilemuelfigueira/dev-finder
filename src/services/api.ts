import axios, { AxiosRequestConfig } from "axios";

export async function autentication(username: string, password: string) {
  const payload = {
    username,
    password,
  };
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, payload);

  return data;
}

export async function searchGitUsers(query: string) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://api.github.com/search/users?${query}`,
  };

  const { data } = await axios(options);

  return data;
}

export async function downloadUserProfile(username: string) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://api.github.com/users/${username}`,
  };

  const { data } = await axios(options);

  return data;
}
