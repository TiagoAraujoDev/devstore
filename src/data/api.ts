import { env } from "~/env";

const api = async (path: string, init?: RequestInit) => {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL;
  const apiPrefix = "/api";
  const url = new URL(apiPrefix.concat(path), baseUrl);
  return fetch(url, init);
};

export { api };
