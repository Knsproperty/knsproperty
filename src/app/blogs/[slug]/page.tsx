import Container from "@/blocks/atoms/container";
import Banner from "@/blocks/molecules/banner/banner";
import Recentposts from "@/blocks/sections/blog/recentposts";
import { formatDate } from "@/utils/helpers";
import React from "react";
import ReactHtmlParser from "react-html-parser";
export default async function page({ params }: any) {
  const [{ attributes }] = await getProperty(params.slug);
  return (
    <>
      <Banner>
        <div className="grid grid-cols-1 text-center mt-10 ">
          <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white mb-3 z-50">
            {attributes.title}
          </h3>
          <ul className="list-none mt-6 z-50">
            <li className="inline-block text-white mx-5">
              {" "}
              <span className="text-white block">Author :</span>{" "}
              <span className="block text-white">{attributes.author}</span>
            </li>
            <li className="inline-block text-white mx-5">
              {" "}
              <span className="text-white block">Date :</span>{" "}
              <span className="block text-white">
                {formatDate(attributes.date)}
              </span>
            </li>
            <li className="inline-block text-white mx-5">
              {" "}
              <span className="text-white block">Time :</span>{" "}
              <span className="block text-white">3 Min Read</span>
            </li>
          </ul>
        </div>
      </Banner>
      <Container>
        <section className="relative md:py-24 py-16">
          <div className="container">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-8 md:order-1 order-2">
                <div className="relative overflow-hidden rounded-xl shadow ">
                  <img src={attributes.thumbnail.data.attributes.url} alt="" />
                  <div className="p-6">
                    <h1 className="text-2xl font-semibold text-center py-10">
                      {attributes.title}
                    </h1>
                    <p className="my-2 text-center font-light">
                      {attributes.description}
                    </p>
                    <div id="blog">{ReactHtmlParser(attributes.content)}</div>
                  </div>
                </div>
                <div className="p-6 rounded-md shadow  mt-8">
                  <h5 className="text-lg font-semibold">Leave A Comment:</h5>
                  <form className="mt-8">
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-left">
                          <label htmlFor="name" className="font-semibold">
                            Your Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user w-4 h-4 absolute top-3 start-4"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx={12} cy={7} r={4} />
                            </svg>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input ps-11"
                              placeholder="Name :"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-left">
                          <label htmlFor="email" className="font-semibold">
                            Your Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-mail w-4 h-4 absolute top-3 start-4"
                            >
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-input ps-11"
                              placeholder="Email :"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-left">
                          <label htmlFor="comments" className="font-semibold">
                            Your Comment:
                          </label>
                          <div className="form-icon relative mt-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-message-circle w-4 h-4 absolute top-3 start-4"
                            >
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            <textarea
                              name="comments"
                              id="comments"
                              className="form-input ps-11 h-28"
                              placeholder="Message :"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              {/*end col*/}
              <Recentposts />
              {/*end col*/}
            </div>
            {/*end grid*/}
          </div>
          {/*end container*/}
        </section>
      </Container>
    </>
  );
}

const getProperty = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${slug}`, {
    cache: "force-cache",
  });
  return await res.json();
};

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const [{ attributes }] = await getProperty(slug);
  return {
    title: attributes.title,
    description: attributes.description,
    keywords: [
      "Dubai properties",
      "real estate",
      "buy property in Dubai",
      "rent property in Dubai",
      "investment properties",
    ],
    authors: [{ name: "", url: "" }],
    abstract: "",
    publisher: "K&N PROPERTIES",
  }
}
