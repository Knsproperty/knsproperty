import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

interface Props {
  onclose: any;
}

const NewsLetter: React.FC<Props> = ({ onclose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform any form validation or submission logic here
    // For simplicity, let's assume the form is valid and proceed with the subscription
    setIsSubscribed(true);
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div className="bg-primary text-white pt-5 lg:pb-10 pb-5 px-5 relative lg:static  rounded-t-md">
        <button
          onClick={onclose}
          tabIndex={0}
          aria-label="close"
          className="absolute top-1.5 right-1.5 bg-white p-2 rounded-full lg:hidden inline-block"
        >
          <FiX className=" stroke-primary" />
        </button>
        <div className="bg-secondary p-3 inline-block rounded-md _center mb-3">
          <HiOutlineMail className="stroke-white" size={20} />
        </div>
        <h1 className="text-white text-3xl font-light mb-5">
          {" "}
          Sign Up <br /> and stay updated
        </h1>
        <p className="text-sm font-light text-[#e4e4e4]">
          Stay tuned for exciting updates, exclusive offers, and valuable
          insights in our upcoming newsletter. Don't miss out!
        </p>
      </div>

      <div className="px-5 py-10 bg-white lg:relative rounded-b-md">
        <button
          onClick={onclose}
          tabIndex={0}
          aria-label="close"
          className="absolute top-0 right-1 bg-primary  p-2 -mr-5 -mt-3 rounded-full lg:inline-block hidden"
        >
          <FiX className=" stroke-white" />
        </button>
        {isSubscribed ? (
          <p className="text-green-500 font-light text-sm">
            You are subscribed!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="text-sm placeholder:text border border-[lightgray] px-5 py-2.5 block w-full mb-2 rounded-md"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="text-sm placeholder:text border border-[lightgray] px-5 py-2.5 block w-full mb-2 rounded-md"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-5 py-2.5 w-full block bg-secondary text-white rounded-md font-light text-sm mb-2"
            >
              Subscribe
            </button>
            <p className="text-sm font-light ">
              Zero span, Unsubscribe any time
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
