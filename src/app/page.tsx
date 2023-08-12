"use client";

import { BookList } from "@/components/BookList";
import { SearchInput } from "@/components/SearchInput";
import { IBookData } from "@/interfaces/IBookData";
import { getBooks } from "@/services/getBooks";

import { useEffect, useState } from "react";

export default function Home() {
  const [booksList, setBooksList] = useState<IBookData[]>([]);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getBooks(search, "Typescript");

        const items = data.items;
        setBooksList(items);
        setIsLoading(false);
        setInputSearch("");
      } catch (error) {
        console.log("fail: ", error);
      }
    })();
  }, [search]);

  return (
    <main className="flex min-h-screen flex-col items-center p-2 px-2 gap-6 md:px-20">
      <h1 className="pt-6 text-lg font-semibold">Busca Livro</h1>
      <SearchInput
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        handleClick={() => setSearch(inputSearch)}
      />
      {isLoading ? <p>Carregando...</p> : <BookList booksList={booksList} />}
    </main>
  );
}
