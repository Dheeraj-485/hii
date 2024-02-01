import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [show, setShow] = useState([]);
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  useEffect(() => {
    async function fetchShow() {
      const response = await fetch(
        `http://api.tvmaze.com/search/shows?q=${queryTerm}`
      );
      const data = await response.json();
      setShow(data);
    }
    fetchShow();
  }, [queryTerm]);

  return (
    <main>
      <section></section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {show.map((task) => (
            <Card key={task.id} task={task} />
          ))}
        </div>
      </section>
    </main>
  );
};
