import { axiosInstance } from "../../../ui/functions/axiosInstance";

export const inGetCommentsId = async (id: string) => {
  return axiosInstance
    .get(`/posts/${id}/comments`)
    .then((res: any) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};