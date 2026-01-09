import axios from "axios";
import { Headers, Options } from "../types/index";

const headers: Headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-store, no-cache, must-revalidate",
  Pragma: "no-cache",
};

export const instance = axios.create({
  baseURL: "https://63bedcf7f5cfc0949b634fc8.mockapi.io/",
  timeout: 30000,
});

async function createRequest(url: string, options: Options) {
  const response = await instance.request({
    ...options,
    url,
    data: options.data,
    method: options.method,
    headers: {
      ...headers,
    },
  });
  return response;
}

export const get = async (url: string, options?: Options) => {
  const request = await createRequest(url, {
    ...options,
    method: "GET",
  });
  return request;
};
