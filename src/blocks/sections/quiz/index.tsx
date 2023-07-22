"use client";
import React, { useState } from "react";
import Container from "@/blocks/atoms/container";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "@mantine/hooks";
import { isValidEmail } from "@/utils/helpers";
import { submitForm } from "@/services/email/quiz";

const Continue = ({ onClick }: any) => {
  return (
    <div className="_center">
      <a onClick={onClick} className="relative inline-flex items-center justify-center p-4 px-10 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-[tomato] rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Continue</span>
        <span className="relative invisible">Continue</span>
      </a>
    </div>
  );
};

interface Props {
  set: any;
  next: any;
  state: any;
}
interface Fouth_Props {
  set: any;
  next: any;
  state: any;
  error?: string;
  Loading: boolean;
}

const varient = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const First: React.FC<Props> = ({ set, next, state }) => {
  return (
    <motion.div
      variants={varient}
      initial="initial"
      animate="animate"
      exit={"exit"}
      transition={{
        duration: 1,
      }}
      className="flex flex-col gap-8"
    >
      <h1 className="text-3xl font-bold text-primary text-center mt-5">
        I am interested to
      </h1>
      <div className="_center gap-5 ">
        <button
          className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.first == "buy" ? "bg-secondary text-white" : ""
            }`}
          onClick={() => {
            set("first", "buy");
          }}
        >
          buy
        </button>
        <button
          className={`capitalize px-10 py-2.5 text-sm border border-szecondary rounded-full ${state.first == "rent" ? "bg-secondary text-white" : ""
            }`}
          onClick={() => {
            set("first", "rent");
          }}
        >
          rent
        </button>
      </div>
      <Continue onClick={next} />
    </motion.div>
  );
};

const Second: React.FC<Props> = ({ set, next, state }) => {
  return (
    <motion.div
      variants={varient}
      initial="initial"
      animate="animate"
      exit={"exit"}
      transition={{
        duration: 1,
      }}
      className=" p-5  flex-col h-full gap-5"
    >
      <h1 className="text-3xl font-bold text-primary text-center">
        I am looking for
      </h1>
      <div className="_center gap-5 flex-wrap py-5">
        <button
          className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == "1" ? "bg-secondary text-white" : ""
            }`}
          onClick={() => {
            set("second", "1");
          }}
        >
          1 Bed
        </button>
        <button
          className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == "2" ? "bg-secondary text-white" : ""
            }`}
          onClick={() => {
            set("second", "2");
          }}
        >
          2 Bed
        </button>
        <button
          className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == "3" ? "bg-secondary text-white" : ""
            }`}
          onClick={() => {
            set("second", "3");
          }}
        >
          3 Bed
        </button>
        <button
          className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == "4" ? "bg-secondary text-white" : ""
            }`}
          onClick={() => {
            set("second", "4");
          }}
        >
          4 Bed
        </button>
        <button
          className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == "5+" ? "bg-secondary text-white" : ""
            }`}
          onClick={() => {
            set("second", "5+");
          }}
        >
          5+ Bed
        </button>
      </div>
      <Continue onClick={next} />
    </motion.div>
  );
};

const Third: React.FC<Props> = ({ set, next, state }) => {
  return (
    <motion.div
      variants={varient}
      initial="initial"
      animate="animate"
      exit={"exit"}
      transition={{
        duration: 1,
      }}
      className=" p-5  flex-col h-full gap-5"
    >
      <h1 className="text-3xl font-bold text-primary text-center">
        Price range (AED)
      </h1>
      <div className="_center gap-5 flex-wrap py-5">
        <input
          value={state.min}
          placeholder="Min"
          className="p-2 rounded-md border border-secondary text-sm md:text-md"
          onChange={(evt) => {
            set("min", evt.target.value);
          }}
          type="number"
        />
        <input
          value={state.max}
          placeholder="Max"
          className="p-2 rounded-md border border-secondary text-sm md:text-md"
          onChange={(evt) => {
            set("max", evt.target.value);
          }}
          type="number"
        />
      </div>
      <Continue onClick={next} />
    </motion.div>
  );
};

const Fourth: React.FC<Fouth_Props> = ({
  set,
  next,
  state,
  error,
  Loading,
}) => {
  return (
    <motion.div
      variants={varient}
      initial="initial"
      animate="animate"
      exit={"exit"}
      transition={{
        duration: 1,
      }}
      className=" p-5 flex-col h-full gap-5"
    >
      <h1 className="text-3xl font-bold text-primary text-center">
        Amazing, give us a way to contact you
      </h1>
      <div className="_center gap-5 flex-wrap py-5">
        <input
          value={state.name}
          placeholder="Name"
          className="p-2 rounded-md border border-secondary md:text-md text-sm"
          onChange={(evt) => {
            set("name", evt.target.value);
          }}
          type="text"
        />
        <input
          value={state.email}
          placeholder="Email"
          className="p-2 rounded-md border border-secondary md:text-md text-sm"
          onChange={(evt) => {
            set("email", evt.target.value);
          }}
          type="email"
        />
        <input
          value={state.mobile}
          placeholder="Mobile"
          className="p-2 rounded-md border border-secondary md:text-md text-sm"
          onChange={(evt) => {
            set("mobile", evt.target.value);
          }}
          type="number"
        />
      </div>
      <p className="text-error text-center py-2">{error}</p>
      {Loading ? (
        <button
          className="bg-primary px-10 py-2.5 rounded-md text-white mx-auto block md:text-md text-sm disabled:cursor-not-allowed disabled:opacity-60"
          disabled={true}
        >
          Loading...
        </button>
      ) : (
        <Continue onClick={next} />
      )}
    </motion.div>
  );
};

const QuizComponent: React.FC = () => {
  const [storage, setStorage] = useLocalStorage({
    key: "knsproperty",
    defaultValue: false,
  });

  const [Loading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    first: "",
    second: "",
    min: "",
    max: "",
    name: "",
    email: "",
    mobile: "",
  });

  const [index, setIndex] = useState(0);
  const [error, setError] = useState("");

  const isValidForm = () => {
    const { name, email, mobile, first, second, min, max } = state;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      mobile.trim() === "" ||
      first.trim() === "" ||
      second.trim() === "" ||
      min.trim() === "" ||
      max.trim() === ""
    ) {
      setError("All fields are required");
      return false;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return false;
    }

    setError(""); // Clear the error message
    return true;
  };

  const set = (name: string, value: string) => {
    setState((state) => {
      return { ...state, [name]: value };
    });
  };

  const next = async () => {
    if (index == 3) {
      setIsLoading(true);
      const isValid = isValidForm();

      if (isValid) {
        try {
          await submitForm(state); // Assuming you have the 'submitForm' function that handles the form submission
          setIsLoading(false);
          setStorage(true); // Proceed to the next step
        } catch (error) {
          setIsLoading(false);
          return null;
          // Handle the form submission error here (e.g., show an error message)
        }
      } else {
        setIsLoading(false);
        return null;
      }
    }
    setIndex(index + 1);
  };

  return (
    <div className="py-10 px-2 bg-gradient-to-l- bg-lightgray  from-[skyblue]  to-white">
      <Container>

        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 ">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10 items-center ">
              <div>
                <h2 className="text-5xl font-bold">Find Your <b className="text-[tomato] underline">Perfect Property</b> Match</h2>
                <blockquote>
                  <p className="mt-6 text-sm leading-relaxed text-black">
                    Welcome to our interactive property quiz! Whether you're looking to rent or buy, we understand that finding the ideal property can be a daunting task. That's why we've created this quick and easy quiz to help you discover your perfect property match.
                  </p>
                </blockquote>
              </div>
              <div>
                <div className="overflow-hidden bg-white">
                  <div className="p-8 lg:px-12 lg:py-10">
                    {!storage && (
                      <div className="flex justify-center">
                        <div className="px-5 pb-10 bg-white rounded-md max-w-[500px] lg:min-w-[500px] w-full">
                          <div className="flex justify-center gap-5 mb-5 mt-10 mx-auto ">
                            {[0, 1, 2, 3].map((j) => (
                              <div className="_center">
                                <button
                                  key={j}
                                  onClick={() => {
                                    setIndex(j);
                                  }}
                                  className={`${index == j ? "border-2 border-[tomato]" : "bg-lightgray"
                                    } h-[30px] w-[30px] rounded-full`}
                                >{j + 1}</button>
                              </div>

                            ))}
                          </div>

                          <AnimatePresence>
                            {index == 0 && <First set={set} next={next} state={state} />}
                            {index == 1 && <Second set={set} next={next} state={state} />}
                            {index == 2 && <Third set={set} next={next} state={state} />}
                            {index == 3 && (
                              <Fourth
                                set={set}
                                next={next}
                                state={state}
                                error={error}
                                Loading={Loading}
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}
                    {storage && (
                      <div>
                        <h1 className="text-center font-semibold text-xl py-10 rounded-md">
                          ✅ Quiz is Completed.
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>








      </Container>
    </div>
  );
};

export default QuizComponent;
