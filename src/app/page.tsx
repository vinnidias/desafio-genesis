"use client";

import { api } from "@/services/api";
import Image from "next/image";
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
      <div className="grid grid-cols-5 grid-rows-2">
        {booksList.length > 0 &&
          booksList.map((book: any, index) => {
            const imgLink = book.volumeInfo.imageLinks;
            console.log("link da img: ", imgLink);
            return (
              <div key={index}>
                {imgLink && (
                  <Image
                    src={imgLink['smallThumbnail']}
                    width={60}
                    height={90}
                    alt="capa do livro"
                  />
                )}
                <span>Título: {book.volumeInfo.title}</span>
                <span>Subtítulo: {book.volumeInfo.subtitle}</span>
                <span>
                  Autor:{" "}
                  {book.volumeInfo.authors.map((author: string) => author)}
                </span>
              </div>
            );
          })}
      </div>
    </main>
  );
}
