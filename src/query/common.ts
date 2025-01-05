import { theUrl } from "@/global";

interface QueryParams {
  [key: string]: string | number | boolean;
}

export const createList = <T>(key: string, params: QueryParams = {}) => {
  return {
    queryKey: [key],
    queryFn: async () => {
      const url = new URL(`${theUrl}/api/${key}`);
      Object.keys(params).forEach((param) => {
        url.searchParams.append(param, String(params[param]));
      });
      return request<T[]>(url);
    },
  };
};

export const createOne = <T>(key: string, id: string) => {
  return {
    queryKey: [key, id],
    queryFn: async () => {
      const url = new URL(`${theUrl}/api/${key}/${id}`);
      return request<T>(url);
    },
  };
};

export const request = async <T>(url: URL) => {
  const response = await fetch(url.toString());
  if (!response.ok) throw new Error(`Ошибка запроса ${url.toString()} - ${response.status} ${response.statusText}`);
  return response.json() as Promise<T>;
};
