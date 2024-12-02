import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/listbook" className="mx-3 text-xl">
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/read" className="text-xl">
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className="mx-3 text-xl">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="mx-3 text-xl">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn text-xl">Book Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="text-md mr-3 font-bold bg-green-700 text-white border-green-500 border px-4 py-3 rounded-md">
          Sign Up
        </Link>
        <Link className="text-md mr-3 font-bold bg-green-700 text-white border-green-500 border px-4 py-3 rounded-md">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
