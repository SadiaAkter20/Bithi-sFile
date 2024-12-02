import { useLoaderData, useParams } from "react-router-dom";
import {
  getStoredRead,
  getStoredWishList,
  saveRead,
  saveWishlist,
} from "../Utility/Utility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === idInt);
  // console.log(book);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    publisher,
    totalPages,
    rating,
    yearOfPublishing,
  } = book;

  // console.log(WishlistId);

  const handleWishtlist = () => {
    const WishlistId = getStoredWishList();
    const readList = getStoredRead();
    if (WishlistId.includes(idInt)) {
      toast.error("Book Already Added in the wishlist");
    } else if (readList.includes(idInt)) {
      toast.error("Book is already Read list");
    } else {
      saveWishlist(idInt);
      toast.success("Book Added Successfully in the wishlist");
    }
  };

  const handleReadLs = () => {
    const readList = getStoredRead();
    if (readList.includes(idInt)) {
      toast.error("Already Read This Book");
    } else {
      saveRead(idInt);
      toast.success("I have read this Book");
    }
  };

  return (
    <div>
      <div className="flex justify-between my-20  gap-9">
        <div className="w-1/2 bg-slate-200 rounded-md p-10 flex justify-center">
          <img src={image} className="w-4/5" alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <h2 className="text-xl font-semibold my-3">
            <span className="font-bold">By:</span> {author}
          </h2>
          <p className="divider"></p>
          <p className="text-md font-bold">{category}</p>
          <p className="divider"></p>
          <p className="text-lg">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <p className="text-md font-bold mt-3">
            Tags:{" "}
            {tags.map((tag, idx) => (
              <span key={idx} className="text-green-400 mr-3">
                # {tag}
              </span>
            ))}
          </p>
          <p className="divider"></p>
          <p className="text-lg my-2 font-bold">
            Number of pages: {totalPages}
          </p>
          <p className="text-lg my-2 font-bold">Publisher: {publisher}</p>
          <p className="text-lg my-2 font-bold">
            Year of Publishing: {yearOfPublishing}
          </p>
          <p className="text-lg my-2 font-bold">Rating: {rating}</p>
          <div className="mt-5">
            <button
              onClick={handleReadLs}
              className="rounded-md font-bold text-lg border-2 px-5 py-2 mr-3"
            >
              Read
            </button>
            <button
              onClick={handleWishtlist}
              className="rounded-md font-bold bg-sky-500 text-white text-lg border-2 px-5 py-2"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
