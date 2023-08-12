import Image from "next/image";
import Link from "next/link";

import { IoMdArrowRoundBack } from "react-icons/io";

import { IVolumeInfoData } from "@/interfaces/IVolumeInfoData";

interface IParams {
  params: { id: string };
}

export default async function Description({ params }: IParams) {
  const { id } = params;
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const data = await res.json();

  const bookData: IVolumeInfoData = data.volumeInfo;

  return (
    <main className="flex flex-col justify-center items-center p-2 px-2 gap-6 md:px-20">
      <Link href="/" className="absolute top-0 left-0 m-4 text-sky-300 text-[18px]">
        {" "}
        <IoMdArrowRoundBack />
      </Link>
      <h1 className="pt-6 text-lg font-semibold text-sky-300">Detalhes</h1>
      {bookData.imageLinks ? (
        <Image
          src={bookData.imageLinks.thumbnail}
          alt="Capa do Livro"
          width={120}
          height={180}
        />
      ) : (
        <div></div>
      )}
      <section className="text-center font-semibold">
        <p>
          Título: <span className="font-normal">{bookData.title}</span>
        </p>
        <p>
          Subtítulo: <span className="font-normal">{bookData.subtitle}</span>
        </p>
        <p>
          {bookData.authors && bookData.authors.length > 1
            ? "Autores:"
            : "Autor:"}{" "}
          <span className="font-normal">
            {bookData.authors &&
              bookData.authors.length > 0 &&
              bookData.authors.map((author: string, index) =>
                index > 0 && index < bookData.authors.length - 1
                  ? `${author}, `
                  : `${author}.`
              )}
          </span>
        </p>
        <p>
          Editora: <span className="font-normal">{bookData.publisher}</span>
        </p>
        <p>
          Data de publicação:{" "}
          <span className="font-normal">
            {bookData &&
              bookData.publishedDate &&
              bookData.publishedDate.replace(
                /(\d{4})-(\d{2})-(\d{2})/,
                "$3/$2/$1"
              )}
          </span>
        </p>
        <p className="mt-3">
          Descrição: <span className="font-normal">{bookData.description}</span>
        </p>
        <p></p>
      </section>
    </main>
  );
}
