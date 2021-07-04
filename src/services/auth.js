import axiosClient from ".";

export const login = (email, password) => {
  if (email && password) {
    return axiosClient.post('/api/login', {
      email,
      password
    })
  }
}
