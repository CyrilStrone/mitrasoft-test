import { axiosInstance } from "../../../ui/functions/axiosInstanceCreate";

export const inGetUsersId = async (id: string) => {
  return axiosInstance
    .get(`/users/${id}`)
    .then((res: any) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};
