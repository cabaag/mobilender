import axiosClient from ".";

export const getUsers = (page = 1) => {
  return axiosClient.get(`/api/users?page=${page}`)
}
