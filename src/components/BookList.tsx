import { BookCard } from "./BookCard";
import { IBookData } from "@/interfaces/IBookData";

interface IProps {
  booksList: IBookData[];
}

export const BookList = ({ booksList }: IProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-2 gap-y-6 w-full md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-col-8">
      {booksList.length > 0 &&
        booksList.map((book, index) => {
          const imgLink = book.volumeInfo.imageLinks;
          return (
            <BookCard
              imgLink={imgLink}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              pageLink={`/description/book/${book.id}`}
              key={index}
            />
          );
        })}
    </div>
  );
};
