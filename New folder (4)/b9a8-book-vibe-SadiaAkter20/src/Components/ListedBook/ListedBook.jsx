import { useLoaderData } from "react-router-dom";
import { getStoredRead, getStoredWishList } from "../Utility/Utility";
import Wishlist from "../Wishlist/Wishlist";
import Read from "../Read/Read";
import { useState } from "react";

const ListedBook = () => {
  const data = useLoaderData();
  const WishListData = getStoredWishList();
  const ReadData = getStoredRead();
  // console.log(WishList, Read);
  const wishlist = data.filter((wish) => WishListData.includes(wish.bookId));
  const read = data.filter((read) => ReadData.includes(read.bookId));

  const [selectOption, setSelectOption] = useState("");
  // console.log(selectOption);
  const handleSelection = (e) => {
    setSelectOption(e.target.value);
  };
  const [sorted, setSorted] = useState([]);
  if (selectOption === "rating") {
    console.log("Hello");
    const Rating = wishlist.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    const newRating = [...sorted, Rating];
    setSorted(newRating);
  } else if (selectOption === "pages") {
    const Pages = wishlist.sort((a, b) =>
      a.totalPages > b.totalPages ? -1 : 1
    );
  } else if (selectOption === "year") {
    const Year = wishlist.sort((a, b) =>
      a.yearOfPublishing > b.yearOfPublishing ? -1 : 1
    );
  }

  return (
    <div className="my-12">
      <h2 className="bg-slate-200 p-3 rounded-md my-5 text-center text-2xl font-bold">
        Books
      </h2>
      <div>
        <div className="my-15 text-center">
          <select
            onChange={handleSelection}
            className="p-3 bg-green-400 rounded-2xl px-6 text-xl text-white"
          >
            <option value="rating">Rating</option>
            <option value="pages">Number of Pages</option>
            <option value="year">Publisher Year</option>
          </select>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-xl"
          aria-label="Read"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {read.map((read) => (
            <Read read={read} key={read.bookId}></Read>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-xl"
          aria-label="Wishlist"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {wishlist.map((wish) => (
            <Wishlist wish={wish} key={wish.bookId}></Wishlist>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
