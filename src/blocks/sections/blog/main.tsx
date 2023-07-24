import React from "react";
import Recentposts from "./recentposts";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container max-w-[1320px] lg:mx-auto">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-8 md:order-1 order-2">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
              {children}
              {/*end content*/}
            </div>
            {/*end grid*/}
            {/* <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
              <div className="md:col-span-12 text-center">
                <nav>
                  <ul className="inline-flex items-center -space-x-px">
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                      >
                        <i className="uil uil-angle-left text-[20px]" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                      >
                        <i className="uil uil-angle-right text-[20px]" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
            {/*end grid*/}
          </div>
          {/*end col*/}
          <Recentposts />
          {/*end col*/}
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
}
