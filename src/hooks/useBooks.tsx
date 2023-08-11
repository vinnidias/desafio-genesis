import { useEffect, useState } from "react";

import { api } from "@/services/api";

export const useBooks = () => {
  const [booksList, setBooksList] = useState([]);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const initialSearch = "nextjs";

  const handleSearch = () => {
    setSearch(inputSearch);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(
          `volumes?q=${
            search || initialSearch
          }&key=AIzaSyCv6uOgcltMLEgv9LaRqrbVY4HHVRzgVm8&maxResults=30`
        );
        console.log("success: ", res.data);
        setBooksList(res.data.items);
      } catch (error) {
        console.log("fail: ", error);
      }
    })();
  }, [search]);

  return {
    booksList,
    setBooksList,
    search,
    setSearch,
    handleSearch,
    inputSearch,
    setInputSearch,
  };
};
