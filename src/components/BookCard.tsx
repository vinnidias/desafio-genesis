import Image from "next/image";
import Link from "next/link";

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
      className="flex flex-col justify-center items-center p-2 min-h-full shadow-md rounded transition ease-in-out delay-150 hover:scale-95"
    >
      {imgLink ? (
        <Image
          src={imgLink["smallThumbnail"]}
          width={60}
          height={90}
          alt="capa do livro"
        />
      ) : (
        <div className="h-24"></div>
      )}
      <span className="text-center">Título: {title}.</span>
      <span>
        Autor:{" "}
        {authors &&
          authors.length > 0 &&
          authors.map((author: string, index) =>
            index > 0 && index < authors.length -1 ? `${author}, ` : `${author}.`
          )}
      </span>
    </Link>
  );
};
