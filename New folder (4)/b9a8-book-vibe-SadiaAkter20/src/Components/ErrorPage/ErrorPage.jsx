import { Link } from "react-router-dom";
import errrPic from "../../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <img src={errrPic} alt="" className="w-screen h-3/4" />
      <div className="w-full text-center">
        <Link to="/">
          <button className="btn ">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
