import { useBooks } from "@/hooks/useBooks";
import { BookCard } from "./BookCard";


export const BookList = () => {
  const { booksList } = useBooks()
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-2 gap-y-6 w-full md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-col-8">
      {booksList.length > 0 &&
        booksList.map((book: any, index) => {
          const imgLink = book.volumeInfo.imageLinks;
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
  );
};
