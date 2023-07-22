import React from "react";

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
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
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
            </div>
            {/*end grid*/}
          </div>
          {/*end col*/}
          <div className="lg:col-span-4 md:order-2 order-1">
            <div className="sticky top-20">
              <form>
                <div>
                  <label htmlFor="searchname" className="font-medium text-lg">
                    Search Properties
                  </label>
                  <div className="relative mt-2">
                    <i className="uil uil-search text-lg absolute top-[8px] start-3" />
                    <input
                      name="search"
                      id="searchname"
                      type="text"
                      className="form-input border border-slate-100 dark:border-slate-800 ps-10"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </form>
              <h5 className="font-medium text-lg mt-[30px]">Recent post</h5>
              <div className="flex items-center mt-4">
                <img
                  src="/6.jpg"
                  className="h-16 rounded-md shadow dark:shadow-gray-800"
                  alt=""
                />
                <div className="ms-3">
                  <a href="" className="font-medium hover:text-green-600">
                    10 Things You About Real Estate
                  </a>
                  <p className="text-sm text-slate-400">2nd March 2023</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/7.jpg"
                  className="h-16 rounded-md shadow dark:shadow-gray-800"
                  alt=""
                />
                <div className="ms-3">
                  <a href="" className="font-medium hover:text-green-600">
                    Why We Love Real Estate
                  </a>
                  <p className="text-sm text-slate-400">2nd March 2023</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/8.jpg"
                  className="h-16 rounded-md shadow dark:shadow-gray-800"
                  alt=""
                />
                <div className="ms-3">
                  <a href="" className="font-medium hover:text-green-600">
                    110 Quick Tips About Real Estate
                  </a>
                  <p className="text-sm text-slate-400">2nd March 2023</p>
                </div>
              </div>

              {/*end icon*/}
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
}
