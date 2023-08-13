"use client";

import { BookList } from "@/components/BookList";
import { SearchInput } from "@/components/SearchInput";
import { IBookData } from "@/interfaces/IBookData";
import { getBooks } from "@/services/getBooks";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [booksList, setBooksList] = useState<IBookData[]>([]);

  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 600);

  const [isLoading, setIsLoading] = useState(false);
  const initialSearch = "Typescript";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getBooks(value || initialSearch);

        const items = data.items;

        setBooksList(items);
        setIsLoading(false);
      } catch (error) {
        console.log("fail: ", error);
      }
    })();
  }, [value]);

  return (
    <main className="flex min-h-screen flex-col items-center p-2 px-2 gap-6 md:px-20">
      <h1 className="pt-6 text-lg font-semibold text-sky-300">
        Livraria online
      </h1>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      {isLoading ? <p>Carregando...</p> : <BookList booksList={booksList} />}
    </main>
  );
}
