import React from "react";
import Container from "@/blocks/atoms/container";
import strapi from "@/utils/strapi";
import Link from "next/link";
import { formatDate } from "@/utils/helpers";
import Image from "next/image";
export default async function Blog() {
  const { data } = await strapi.find<any>("blogs", {
    populate: ["*", "thumbnail"],
    pagination: {
      start: 0,
      limit: 3,
    },
  });
  // let dat = {
  //   imageSrc: attributes.thumbnail.data.attributes.url,
  //   category: data[0].attributes.category,
  //   date: attributes.updatedAt,
  //   readingTime: "3 min",
  //   title: attributes.title,
  //   link: attributes.slug,
  // };
  return (
    <section>
      <Container>
        <div className="px-5 sm:px-8 md:py-10">
          <h3 className="py-5 lg:text-4xl md:text-3xl text-2xl font-bold ">
            {" "}
            Blogs
          </h3>

          <div className="flex flex-wrap xl:flex-nowrap gap-10 ">
            <div className="basis-full xl:basis-[65%] shrink-0">
              <Link
                className="block "
                href={`/blogs/${data[0].attributes.slug}`}
              >
                <div className="block relative pt-[75%] bg-black/5  ">
                  <Image
                    height={780}
                    width={580}
                    alt="Post thumbnail"
                    sizes="(max-width: 1279px) 95vw, 950px"
                    src={data[0].attributes.thumbnail.data.attributes.url}
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
              </Link>
              <div className="flex flex-wrap gap-3 items-center mt-8">
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white     tracking-wide whitespace-nowrap">
                    {data[0].attributes.category}
                  </span>
                </div>
                <div className="text-sm data-color flex items-center ">
                  <span className="whitespace-nowrap ">
                    {formatDate(data[0].attributes.updatedAt)}
                  </span>
                  <span className="px-2.5">⋅</span>
                  <span className="whitespace-nowrap">5 min read</span>
                </div>
              </div>
              <h2 className="font-bold leading-snug mt-4 text-2xl sm:text-4xl">
                <Link href={`/blogs/${data[0].attributes.slug}`}>
                  {data[0].attributes.title}
                </Link>
              </h2>
              <p className="mt-4 sm:text-lg">
                {data[0].attributes.description}
              </p>
              <div className="flex gap-2 items-center mt-6">
                <div className="flex">
                  <span className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 ">
                    <div
                      className="rounded-full overflow-hidden border-4 border-gray-200  inline-block leading-[0] !border-2"
                      style={{ width: 30, height: 30 }}
                    >
                      <div className="pt-[100%] relative">
                        <Image
                          width={380}
                          height={284}
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
                  </span>
                </div>
                <div>
                  <a
                    className="text-sm font-medium heading-color"
                    href="/author/main"
                  >
                    {data[0].attributes.author}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row xl:flex-col gap-10 ">
              <div className="flex-1">
                <Link
                  className="block "
                  href={`/blogs/${data[1].attributes.slug}`}
                >
                  <div className="block relative pt-[75%] bg-black/5  ">
                    <Image
                      width={380}
                      height={284}
                      alt="Post thumbnail"
                      src={data[1].attributes.thumbnail.data.attributes.url}
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
                </Link>
                <div className="flex flex-wrap gap-3 items-center mt-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white     tracking-wide whitespace-nowrap">
                      {data[1].attributes.category}
                    </span>
                  </div>
                  <div className="text-sm data-color flex items-center ">
                    <span className="whitespace-nowrap ">
                      {formatDate(data[1].attributes.updatedAt)}
                    </span>
                    <span className="px-2.5">⋅</span>
                    <span className="whitespace-nowrap">4 min read</span>
                  </div>
                </div>
                <h2 className="font-bold leading-snug mt-3 text-2xl">
                  <Link href={`/blogs/${data[1].attributes.slug}`}>
                    {data[1].attributes.title}
                  </Link>
                </h2>
                <p className="mt-3">{data[1].attributes.description}</p>
              </div>
              <div className="flex-1">
                <a className="block " href={data[2].attributes.slug}>
                  <div className="block relative pt-[75%] bg-black/5  ">
                    <img
                      alt="Post thumbnail"
                      sizes="(max-width: 767px) 95vw, (max-width: 1279px) 40vw, 450px"
                      src={data[2].attributes.thumbnail.data.attributes.url}
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
                      {data[2].attributes.category}
                    </a>
                  </div>
                  <div className="text-sm data-color flex items-center ">
                    <span className="whitespace-nowrap ">
                      {formatDate(data[2].attributes.updatedAt)}
                    </span>
                    <span className="px-2.5">⋅</span>
                    <span className="whitespace-nowrap">3 min read</span>
                  </div>
                </div>
                <h2 className="font-bold leading-snug mt-3 text-2xl">
                  <a href={data[2].attributes.slug}>
                    {data[2].attributes.title}
                  </a>
                </h2>
                <p className="mt-3">{data[2].attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
