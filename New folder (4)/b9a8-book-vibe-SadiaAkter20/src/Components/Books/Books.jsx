import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const books = useLoaderData();
  return (
    <div className="my-5 mb-7">
      <h2 className="text-center font-bold text-3xl">Books</h2>
      <div className="grid grid-cols-3 gap-5 my-12">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
