import { useEffect, useState } from "react";

import { Link, NavLink, useParams } from "react-router-dom";
import Backup from "../assets/backup_image.avif";

const HomePage = () => {
  const [show, setShow] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
      console.log(data);
    }
    fetchShow();
  }, [id]);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          <div className="flex my-2 ">
            <img
              className="mx-2 "
              src={show.image ? show.image.medium : { Backup }}
              alt={show.name}
            />
            <div className="my-1">
              <h1>{show.name}</h1>
              {show.genres &&
                show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="inline-block border-5 my-1 mx-1 m-1 p-4 bg-green-300 text-white-100 "
                  >
                    {genre}
                  </span>
                ))}
              <p>
                <strong>Status:</strong> {show.status && show.status}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                {show.rating ? show.rating.average : "No rating"}
              </p>
              <p>
                <strong>Offical Site:</strong>{" "}
                {show.officialSite ? (
                  <Link to={show.officialSite}>{show.officialSite}</Link>
                ) : (
                  "No Official Site"
                )}
              </p>
              <p>
                <strong>{show.summary}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
