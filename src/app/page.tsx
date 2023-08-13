"use client";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { useDebounce } from "use-debounce";

import { BookList } from "@/components/BookList";
import { SearchInput } from "@/components/SearchInput";
import { IBookData } from "@/interfaces/IBookData";
import { getBooks } from "@/services/getBooks";
import { ErrorModal } from "@/components/ErrorModal";
import { PageTitle } from "@/components/PageTitle";

export default function Home() {
  const [booksList, setBooksList] = useState<IBookData[]>([]);

  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 600);

  const [isLoading, setIsLoading] = useState(false);
  const initialSearch = "Typescript";

  const [isError, setIsError] = useState({
    message: "",
    code: "",
  });

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const lastSearch = Cookies.get("last-search");
        const { data } = await getBooks(value || lastSearch || initialSearch);
        const items = data.items;
        value && Cookies.set("last-search", value);
        setBooksList(items);
        setIsLoading(false);
      } catch (error: any) {
        console.error("fail: ", error);
        setIsError({
          message: error.message,
          code: error.code,
        });
        setIsLoading(false);
      }
    })();
  }, [value]);

  return (
    <main className="flex min-h-screen flex-col items-center p-2 px-2 gap-6 md:px-20">
      <PageTitle title="Livraria Online" />

      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />

      {isLoading ? <p>Carregando...</p> : <BookList booksList={booksList} />}

      {isError.message && (
        <ErrorModal
          code={isError.code}
          message={isError.message}
          handleClose={() =>
            setIsError({
              message: "",
              code: "",
            })
          }
        />
      )}
    </main>
  );
}
