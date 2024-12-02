import { Link } from "react-router-dom";
import book from "../../assets/Banner.png";
const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-10 my-10 bg-slate-200 rounded-lg p-10">
      <div className="w-1/2">
        <h2 className="text-6xl font-bold text-dark leading-snug">
          Books to freshen up your bookshelf
        </h2>
        <Link to="/listbook">
          <button className="btn bg-green-600 rounded-lg mt-6 text-xl text-white font-bold">
            View The List
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img src={book} alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default Banner;
