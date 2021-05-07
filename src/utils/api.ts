import axios, { Method } from "axios";
import { apiURL } from "./config";

const call = (method: Method) => (
  url: string,
  { body, query, headers }: any = {}
) => {
  return axios({
    method,
    baseURL: `${apiURL}${url}`,
    data: body,
    headers,
    params: query,
  })
    .then((response) => response.data)
    .catch((error) => {
      const apiError = new Error(error.message);
      apiError.message = error.response.data.message;
      throw apiError;
    });
};

export default {
  get: call("GET"),
  post: call("POST"),
  put: call("PUT"),
  delete: call("DELETE"),
};
