"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function RecommendedProvider({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([1]);

  useEffect(() => {
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (page > 1) {
      setPages((prevPages) => [...prevPages, page]);
    }
  }, [page]);

  return (
    <div
      className="grid 3xl:grid-cols-[repeat(8,_9vw)] xl:grid-cols-[repeat(6,_11vw)]
     lg:grid-cols-[repeat(5,_12.5vw)] md:grid-cols-[repeat(5,_16vw)] 
     xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_29vw)] 
     gap-y-[0.625rem] justify-between items-stretch"
    >
      {children}
    </div>
  );
}

export default RecommendedProvider;
