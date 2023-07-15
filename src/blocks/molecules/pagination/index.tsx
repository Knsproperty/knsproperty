"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Pagination({ meta }: any) {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
    // Get the current URL search parameters
    const currentParams = new URLSearchParams(window.location.search);

    // Update the "page" parameter with the new value
    currentParams.set("page", String(page));

    // Get the updated URL pathname with the modified search parameters
    const newPathName = `${window.location.pathname
      }?${currentParams.toString()}`;

    // Navigate to the new URL
    router.push(newPathName);
  };
  const buttons = Array.from(
    // @ts-ignore
    { length: meta?.pagination?.pageCount },
    (_, index) => (
      <button
        key={index}
        className={` px-5 lg:px-2 mx-1  font-lg border border-[#80808071] ${page === index + 1 ? "bg-primary text-white" : ""}`}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </button>
    )
  );
  return (
    <div className="bg-lightgray-- _center py-5">
      <button
        aria-label="pagination-previous"
        className={` px-3 py-1 ${page == 1 && "opacity-10"} `}
        onClick={() => handlePageChange(page - 1)}
      >
        <FiChevronLeft size={22} />
      </button>
      <div className="mx-2">
        {buttons}
      </div>
      <button
        aria-label="pagination-next"
        className={` px-3 py-1 ${
          // @ts-ignore
          page >= meta?.pagination?.pageCount && "opacity-10"
          }`}
        onClick={() => handlePageChange(page + 1)}
      >
        <FiChevronRight size={22} />
      </button>
    </div>
  );
}
