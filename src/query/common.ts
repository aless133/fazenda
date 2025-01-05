import { theUrl } from "@/global";

interface QueryParams {
  [key: string]: string | number | boolean; // Adjust types as needed
}

export const createList = <T>(key: string, params:QueryParams = {}) => {
  return {
    queryKey: [key],
    queryFn: async () => {
      const url = new URL(`${theUrl}/api/${key}`);
      
      Object.keys(params).forEach(param => {
        url.searchParams.append(param, String(params[param]));
      });

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Failed to fetch ${key} list`);
      }
      return response.json() as Promise<T>;
    },
  };
};

export const createOne = (key: string, id:string) => {
  return {
    queryKey: [key,id],
    queryFn: async () => {
      const url = new URL(`${theUrl}/api/${key}/${id}`);
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Failed to fetch ${key} list`);
      }
      return response.json();
    },
  };
};