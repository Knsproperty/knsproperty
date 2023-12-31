"use client";

const configuration = {
  time: 60000,
};

import NewsLetter from ".";
import { useState, useEffect } from "react";
import { useScrollLock } from "@mantine/hooks";

const NewsLetterSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  useScrollLock(showPopup);
  useEffect(() => {
    const popupClosed = localStorage.getItem("popupClosed");

    if (!popupClosed) {
      const timeout = setTimeout(() => {
        setShowPopup(true);
        clearTimeout(timeout);
      }, configuration.time);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("popupClosed", "true");
    setShowPopup(false);
  };

  if (!showPopup) {
    return null; // Don't render the popup if showPopup is false
  }

  return (
    <div className="fixed z-[60] top-0 left-0 w-screen h-screen bg-black bg-opacity-60 _center ">
      <div className="xl:max-w-5xl lg:max-w-3xl md:max-w-lg  max-w-md p-2 md:p-0">
        <NewsLetter onclose={handleClose} />
      </div>
    </div>
  );
};

export default NewsLetterSection;
