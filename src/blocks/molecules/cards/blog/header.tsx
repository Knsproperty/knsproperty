import React from "react";

export default function Blog_Header() {
  return (
    <div className="mx-auto max-w-8xl px-4 mt-24">
      <a href="/how-ar-will-transform-our-lives-in-2050?referrer=github">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-secondary-content shadow-lg lg:flex-row">
          <div
            className="flex-1 basis-1/2"
            data-contentful-field-id="featuredImage"
            data-contentful-entry-id="5Ffob3XoJGrQuKE5uRUugR"
          >
            <img
              alt="Augment Reality (AR)"
              src="https://i.ibb.co/Ms4qyXp/img-3.png"
              //   fetchpriority="high"
              width={721}
              height={590}
              decoding="async"
              data-nimg={1}
              className="w-full transition-all"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative flex flex-1 basis-1/2 flex-col justify-center py-6 px-4 lg:px-16 lg:py-12 xl:px-24">
            <div className="mb-2 flex flex-wrap items-center">
              <div className="flex items-center">
                <div
                  className="mr-2 overflow-hidden rounded-full border border-blue500"
                  data-contentful-field-id="avatar"
                  data-contentful-entry-id="5pJhJPUcTzpAL9ZPeXL7hr"
                >
                  <img
                    alt="Livia Dokidis"
                    loading="lazy"
                    width={28}
                    height={28}
                    decoding="async"
                    data-nimg={1}
                    className="transition-all"
                    src="https://i.ibb.co/Ms4qyXp/img-3.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <span
                  className="text-xs leading-none text-gray600"
                  data-contentful-field-id="name"
                  data-contentful-entry-id="5pJhJPUcTzpAL9ZPeXL7hr"
                >
                  Livia Dokidis
                </span>
              </div>
              <div
                className="ml-auto hidden pl-2 text-xs text-gray600"
                data-contentful-field-id="publishedDate"
                data-contentful-entry-id="5Ffob3XoJGrQuKE5uRUugR"
              >
                December 3, 2022
              </div>
            </div>
            <h1 className=" font-semibold text-4xl">
              How AR will transform our lives in 2050
            </h1>
            <p
              className="mt-2 text-sm"
              data-contentful-field-id="shortDescription"
              data-contentful-entry-id="5Ffob3XoJGrQuKE5uRUugR"
            >
              Augmented Reality set to revolutionize daily life in 2050
            </p>
            <div
              className="mt-2 text-xs text-gray600"
              data-contentful-field-id="publishedDate"
              data-contentful-entry-id="5Ffob3XoJGrQuKE5uRUugR"
            >
              December 3, 2022
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
