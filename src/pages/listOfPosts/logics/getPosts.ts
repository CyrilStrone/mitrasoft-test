import { axiosInstance } from "../../../ui/functions/axiosInstanceCreate";

export const inGetPosts = async () => {
  return axiosInstance
    .get(`/posts`)
    .then((res: any) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};

export const inGetPostsId = async (id: string) => {
  return axiosInstance
    .get(`/users/${id}/posts`)
    .then((res: any) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};
