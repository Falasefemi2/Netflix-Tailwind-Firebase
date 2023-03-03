import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SavedShows = () => {
  const sliderRef = useRef(null);
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white left-0 rounded-full ansolute opacity-50 hover:opacity-100 cursor-pointer z-10 after:hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-normal scrollbar-hide relative"
        >
        </div>
        <MdChevronRight
          className="bg-white right-0 rounded-full ansolute opacity-50 hover:opacity-100 cursor-pointer z-10 after:hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default SavedShows;
