import { useQuery } from "react-query";
import reqres from "../service/axiosInstance";

const useGet = (key: string, url: string, configs?: any) => {
  const get = async () => {
    let headers: any = {};
    const authToken = localStorage.getItem("token");
    if (configs?.token) headers = { Authorization: `Bearer ${authToken}` };
    const { data } = await reqres.get(url, { headers });
    return data;
  };

  const defaultConfig = {
    enabled: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
    ...configs,
  };
  return useQuery(key, get, defaultConfig);
};

export default useGet;
