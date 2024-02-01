import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/tvmaze.png";
const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();

    return navigate(`/search?q=${queryTerm}`);
  };
  return (
    <header>
      <nav className=" bg-gray-700  dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tvmaze
            </span>
          </Link>
          <div className="flex items-center relative">
            <span className="sr-only">Search icon</span>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="search-navbar"
                name="search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </form>
            <Link
              to="/"
              className="cursor-pointer text-xl text-grey-700 dark:text-white mr-5 "
            >
              Home
            </Link>

            <Link
              to="/about"
              className="cursor-pointer text-xl text-grey-700 dark:text-white mr-5 "
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
