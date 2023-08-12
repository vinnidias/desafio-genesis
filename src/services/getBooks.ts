import { IBooksResponseData } from "@/interfaces/IBooksResponseData";
import { api } from "./api";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getBooks = async (
  search: string,
  initialSearch: string
): Promise<{ data: IBooksResponseData }> => {
  const res = await api.get(
    `volumes?q=${search || initialSearch}&key=${apiKey}&maxResults=30`
  );

  const data = res.data;

  return { data };
};
