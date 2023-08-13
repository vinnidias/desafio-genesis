import Image from "next/image";
import { GiSecretBook } from "react-icons/gi"

import { IVolumeInfoData } from "@/interfaces/IVolumeInfoData";

interface IProps {
  bookData: IVolumeInfoData;
}

export const BookDescription = ({ bookData }: IProps) => {
  return (
    <>
      {bookData.imageLinks ? (
        <Image
          src={bookData.imageLinks.thumbnail}
          alt="Capa do Livro"
          width={120}
          height={180}
        />
      ) : (
        <div className="w-24 h-36 border-[1px] flex justify-center items-center text-sky-600">
          <GiSecretBook />
        </div>
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
      </section>
    </>
  );
};
