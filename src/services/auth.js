import axiosClient from "./index";

export const login = (email, password) => {
  if (email && password) {
    return axiosClient.post('/api/login', {
      email,
      password
    })
  }
}
