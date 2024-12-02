import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, author, review, tags, category, rating, bookName, bookId } =
    book;
  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="card card-compact bg-base-100 shadow-xl p-5 border-2">
        <figure className="bg-slate-200 py-5 rounded-2xl">
          <img src={image} alt="img" className="w-2/5" />
        </figure>
        <div className="card-body">
          <h3>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-md mr-2 text-green-600 border rounded-lg bg-gray-200 px-3"
              >
                {tag}
              </span>
            ))}
          </h3>
          <h2 className="card-title my-3">{bookName}</h2>
          <p className="text-sm font-bold">By: {author}</p>
          <p className="divider"></p>
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg font-medium">{category}</p>
            <h2 className="text-lg font-semibold">{rating}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
