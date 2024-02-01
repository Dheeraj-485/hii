import React from "react";
import { Link } from "react-router-dom";

const Card = ({ task }) => {
  return (
    <div className="m-3 max-w-sm bg-emerald-700 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition transform hover:translate-y-1">
      <Link to={`/singleshow/${task.show.id}`} className="relative">
        <img
          className="rounded-t-lg w-full h-64"
          src={task.show.image ? task.show.image.medium : "Nothing"}
          alt={task.show.name}
        />
      </Link>
      <div className="p-5 flex flex-col items-center">
        <Link to={`/singleshow/${task.show.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-white ">
            {task.show.name}{" "}
          </h5>
        </Link>
        <p className="mb-3 font-bold text-lg text-white-800 dark:text-gray-400">
          {task.show.rating ? task.show.rating.average : <span>No Rating</span>}
        </p>
      </div>
    </div>
  );
};

export default Card;
