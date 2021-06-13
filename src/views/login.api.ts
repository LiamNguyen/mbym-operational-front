import Axios, { AxiosRequestConfig } from "axios";
export interface Credentials {
  username: string;
  password: string;
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "http://localhost:7001/api/new-user",
    data,
  };
  const {data:response} = await Axios.request(requestConfig)
};
