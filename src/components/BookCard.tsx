import Image from "next/image";
import Link from "next/link";
import { GiSecretBook } from "react-icons/gi";

interface IProps {
  imgLink?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  title: string;
  authors: string[];
  pageLink: string;
}

export const BookCard = ({ imgLink, title, authors, pageLink }: IProps) => {
  return (
    <Link
      href={pageLink}
      className="flex flex-col justify-center items-center gap-1 p-2 min-h-full  md:text-xs shadow-md rounded transition ease-in-out delay-150 hover:scale-95"
    >
      {imgLink ? (
        <Image
          src={imgLink["smallThumbnail"]}
          width={60}
          height={90}
          alt="capa do livro"
        />
      ) : (
        <div className="h-20 w-16 flex justify-center items-center border-[1px] text-sky-600">
          {" "}
          <GiSecretBook />
        </div>
      )}
      <span className="text-center">Título: {title}.</span>
      <span className="text-center">
        Autor:{" "}
        {authors &&
          authors.length > 0 &&
          authors.map((author: string, index) =>
            index > 0 && index < authors.length - 1
              ? `${author}, `
              : `${author}.`
          )}
      </span>
    </Link>
  );
};
