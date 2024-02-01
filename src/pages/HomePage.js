import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
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
      console.log(data);
    }
    fetchShow();
  }, [show]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {show.map((task) => (
            <Card key={task.show.id} task={task} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
