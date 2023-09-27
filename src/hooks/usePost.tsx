import { useMutation } from "react-query";
import reqres from "../service/axiosInstance";

interface IParams {
  url: string;
  payload?: any;
  token?: boolean;
}

const post = async ({ url, payload, token = true }: IParams) => {
  let headers: any;
  if (token) {
    const authToken = localStorage.getItem("token");
    headers = { authorization: `Bearer ${authToken}` };
  }

  const { data } = await reqres.post(url, payload, { headers });
  return data;
};
const usePost = () => useMutation(post);
export default usePost;
