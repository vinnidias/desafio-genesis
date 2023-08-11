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
  console.log("link no card", imgLink);
  return (
    <Link
      href={pageLink}
      className="flex flex-col justify-center items-center p-2 min-h-full shadow-md rounded  transition ease-in-out delay-150 hover:scale-95"
    >
      {imgLink ? (
        <Image
          src={imgLink["smallThumbnail"]}
          width={60}
          height={90}
          alt="capa do livro"
        />
      ) : (
        <div className="min-h-[50%]"></div>
      )}
      <span className="text-center">Título: {title}</span>
      <span>Autor: {authors.map((author: string) => author)}</span>
    </Link>
  );
};
