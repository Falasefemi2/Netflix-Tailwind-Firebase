import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const sliderRight = () => {
    sliderRef.current.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white left-0 rounded-full ansolute opacity-50 hover:opacity-100 cursor-pointer z-10 after:hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-normal scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white right-0 rounded-full ansolute opacity-50 hover:opacity-100 cursor-pointer z-10 after:hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};
 export default Row;