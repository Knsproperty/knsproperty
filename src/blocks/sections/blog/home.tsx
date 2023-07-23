import React from "react";
import Container from "@/blocks/atoms/container";
export default function Blog() {
  return (
    <section>
      <Container>
        <div className="px-5 sm:px-8 md:py-10">
          <h3 className="py-5 lg:text-4xl md:text-3xl text-2xl font-bold "> Blogs</h3>

          <div className="flex flex-wrap xl:flex-nowrap gap-10 ">
            <div className="basis-full xl:basis-[65%] shrink-0">
              <a
                className="block "
                href="/blog/the-only-limit-to-our-realization-of-tomorrow-will-be-our-doubts-of-today"
              >
                <div className="block relative pt-[75%] bg-black/5  ">
                  <img
                    alt="Post thumbnail"
                    sizes="(max-width: 1279px) 95vw, 950px"
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    decoding="async"
                    data-nimg="fill"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      objectFit: "cover",
                      color: "transparent",
                    }}
                  />
                </div>
              </a>
              <div className="flex flex-wrap gap-3 items-center mt-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white     tracking-wide whitespace-nowrap"
                    href="/category/inspirational"
                  >
                    inspirational
                  </a>
                </div>
                <div className="text-sm data-color flex items-center ">
                  <span className="whitespace-nowrap ">Jul 8, 2022</span>
                  <span className="px-2.5">⋅</span>
                  <span className="whitespace-nowrap">5 min read</span>
                </div>
              </div>
              <h2 className="font-bold leading-snug mt-4 text-2xl sm:text-4xl">
                <a href="/blog/the-only-limit-to-our-realization-of-tomorrow-will-be-our-doubts-of-today">
                  The only limit to our realization of tomorrow will be our doubts
                  of today
                </a>
              </h2>
              <p className="mt-4 sm:text-lg">
                Nostrud proident cupidatat quis commodo aliquip aliqua dolor
                exercitation mollit aliquip aliquip exercitation anim enim laboris
                reprehenderit excepteur anim. Et ea sunt laboris ullamco duis sit
                sit eu qui ut duis consectetur fugiat ullamco ex incididunt.
              </p>
              <div className="flex gap-2 items-center mt-6">
                <div className="flex">
                  <a
                    className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 "
                    href="/author/main"
                  >
                    <div
                      className="rounded-full overflow-hidden border-4 border-gray-200  inline-block leading-[0] !border-2"
                      style={{ width: 30, height: 30 }}
                    >
                      <div className="pt-[100%] relative">
                        <img
                          alt="author avatar"
                          sizes="30px"
                          decoding="async"
                          src="https://plus.unsplash.com/premium_photo-1661963885635-2b428cedce28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1YmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: "cover",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    className="text-sm font-medium heading-color"
                    href="/author/main"
                  >
                    Keith Brandie
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row xl:flex-col gap-10 ">
              <div className="flex-1">
                <a className="block " href="/blog/chinese-art-in-the-modern-world">
                  <div className="block relative pt-[75%] bg-black/5  ">
                    <img
                      alt="Post thumbnail"
                      src="https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      decoding="async"
                      data-nimg="fill"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                  </div>
                </a>
                <div className="flex flex-wrap gap-3 items-center mt-6">
                  <div className="flex flex-wrap gap-3">
                    <a
                      className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white     tracking-wide whitespace-nowrap"
                      href="/category/life%20lessons"
                    >
                      life lessons
                    </a>
                  </div>
                  <div className="text-sm data-color flex items-center ">
                    <span className="whitespace-nowrap ">Apr 29, 2022</span>
                    <span className="px-2.5">⋅</span>
                    <span className="whitespace-nowrap">4 min read</span>
                  </div>
                </div>
                <h2 className="font-bold leading-snug mt-3 text-2xl">
                  <a href="/blog/chinese-art-in-the-modern-world">
                    Chinese art in the modern world
                  </a>
                </h2>
                <p className="mt-3">
                  Enim eu laborum ex reprehenderit quis sit velit consectetur quis
                  ipsum nisi laboris magna irure in.
                </p>
              </div>
              <div className="flex-1">
                <a className="block " href="/blog/imagination-governs-the-world">
                  <div className="block relative pt-[75%] bg-black/5  ">
                    <img
                      alt="Post thumbnail"
                      sizes="(max-width: 767px) 95vw, (max-width: 1279px) 40vw, 450px"
                      src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      decoding="async"
                      data-nimg="fill"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                  </div>
                </a>
                <div className="flex flex-wrap gap-3 items-center mt-6">
                  <div className="flex flex-wrap gap-3">
                    <a
                      className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white     tracking-wide whitespace-nowrap"
                      href="/category/productivity"
                    >
                      productivity
                    </a>
                  </div>
                  <div className="text-sm data-color flex items-center ">
                    <span className="whitespace-nowrap ">Apr 21, 2022</span>
                    <span className="px-2.5">⋅</span>
                    <span className="whitespace-nowrap">3 min read</span>
                  </div>
                </div>
                <h2 className="font-bold leading-snug mt-3 text-2xl">
                  <a href="/blog/imagination-governs-the-world">
                    Imagination governs the world
                  </a>
                </h2>
                <p className="mt-3">
                  Ipsum est deserunt excepteur ad adipisicing anim mollit deserunt
                  veniam aliqua duis Lorem irure enim labore et excepteur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

  );
}
