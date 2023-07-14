"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
    const newPathName = `${
      window.location.pathname
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
        className={`btn btn-lg ${page === index + 1 ? "btn-active" : ""}`}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </button>
    )
  );
  return (
    <div className="btn-group w-full justify-center items-center md:col-span-10">
      <button
        className={`btn ${page == 1 && "btn-disabled"} btn-lg`}
        onClick={() => handlePageChange(page - 1)}
      >
        «
      </button>
      {buttons}
      <button
        className={`btn ${
          // @ts-ignore
          page >= meta?.pagination?.pageCount && "btn-disabled"
        } btn-lg`}
        onClick={() => handlePageChange(page + 1)}
      >
        »
      </button>
    </div>
  );
}
