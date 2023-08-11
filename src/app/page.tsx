"use client";

import { BookCard } from "@/components/BookCard";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(
          "volumes?q=nextjs&key=AIzaSyCv6uOgcltMLEgv9LaRqrbVY4HHVRzgVm8"
        );
        console.log("success: ", res.data);
        setBooksList(res.data.items);
      } catch (error) {
        console.log("fail: ", error);
      }
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-start p-2 gap-2">
      <h1>Home</h1>
      <div className="grid grid-cols-1 grid-rows-2 gap-2 gap-y-6 md:grid-cols-4 lg:grid-cols-5  ">
        {booksList.length > 0 &&
          booksList.map((book: any, index) => {
            const imgLink = book.volumeInfo.imageLinks;
            console.log("link da img: ", imgLink);
            return (
              <BookCard
                imgLink={imgLink}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                pageLink="/description"
                key={index}
              />
            );
          })}
      </div>
    </main>
  );
}
