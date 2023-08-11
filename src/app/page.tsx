"use client";

import { BookList } from "@/components/BookList";
import { SearchInput } from "@/components/SearchInput";
import { useBooks } from "@/hooks/useBooks";

export default function Home() {
  const { inputSearch, setInputSearch, handleSearch } = useBooks();

  return (
    <main className="flex min-h-screen flex-col items-center p-2 px-2 gap-6 md:px-20">
      <h1 className="pt-6 text-lg font-semibold">Busca Livro</h1>
      <SearchInput
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        handleClick={handleSearch}
      />
      <BookList />
    </main>
  );
}
