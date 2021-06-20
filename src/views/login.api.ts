import Axios, { AxiosRequestConfig } from 'axios'
export interface Credentials {
  email: string
  password: string
  newPassword: string
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'http://localhost:7001/api/reset-password',
    data
  }
  await Axios.request(requestConfig)
}
