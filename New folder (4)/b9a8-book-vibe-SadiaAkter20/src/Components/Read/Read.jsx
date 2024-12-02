import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const Read = ({ read }) => {
  const {
    image,
    bookName,
    author,
    category,
    bookId,
    tags,
    publisher,
    totalPages,
    rating,
    yearOfPublishing,
  } = read;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-5 p-3 border">
        <figure className=" w-2/12">
          <img src={image} className="w-3/4" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="text-xl">
            <span className="font-bold">By:</span> {author}
          </p>
          <div className="flex gap-1">
            <p className="w-[20px]">
              <span className="font-bold">Tags:</span>{" "}
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-md mx-3 bg-green-300 rounded-lg px-2 py-1"
                >
                  #{tag}
                </span>
              ))}
            </p>
            <p className="text-xl flex items-center">
              <HiOutlineLocationMarker className="mr-2" />
              Year Of Pulishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-xl flex w-[2px] mr-3">
              <FaUserGroup className="mr-2" />
              Publisher: {publisher}
            </p>
            <p className="text-xl flex items-center ">
              <MdOutlineContactPage className="mr-2" />
              Pages: {totalPages}
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex items-center">
            <h2 className="bg-green-400 rounded-lg p-2 mr-2 text-xl text-white">
              Category: {category}
            </h2>
            <h2 className="bg-green-400 rounded-lg p-2 mr-2 text-xl text-white">
              Rating: {rating}
            </h2>
            <h2>
              <Link to={`/bookdetails/${bookId}`}>
                <button className="btn bg-green-500 rounded-3xl text-xl text-white">
                  View Details
                </button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
