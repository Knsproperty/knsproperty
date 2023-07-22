import React from "react";

export default function Blogcard() {
  return (
    <a
      className="flex flex-col"
      href="/humanoids-take-the-stage-the-growing-role-of-human-like-robots-in-society?referrer=github"
    >
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-secondary-content shadow-lg">
        <div
          data-contentful-field-id="featuredImage"
          data-contentful-entry-id="24K074hJ0Wjoh9Lq4cyWdd"
        >
          <img
            alt="Humanoid robots poised to revolutionize the way we live and work"
            width={722}
            height={590}
            decoding="async"
            data-nimg={1}
            className="object-cover aspect-[16/10] w-full transition-all"
            sizes="(max-width: 1200px) 100vw, 50vw"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex flex-1 flex-col py-3 px-4 md:px-5 md:py-4 lg:px-7 lg:py-5">
          <p
            className="h3 mb-2 text-gray-800 md:mb-3 "
            data-contentful-field-id="title"
            data-contentful-entry-id="24K074hJ0Wjoh9Lq4cyWdd"
          >
            Humanoids take the stage: the growing role of human-like robots in
            society
          </p>
          <div className="mt-auto flex items-center">
            <div className="flex items-center">
              <div
                className="mr-2 overflow-hidden rounded-full border border-blue500"
                data-contentful-field-id="avatar"
                data-contentful-entry-id="4hjlJX04OL8aR17QgbDmOE"
              >
                <img
                  alt="Skylar Geidt"
                  loading="lazy"
                  width={28}
                  height={28}
                  decoding="async"
                  data-nimg={1}
                  className="transition-all"
                  srcSet="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fnvxmqufxogry%2FDCX5igdj3acW1jo6Nkkoc%2F0911cdb9c12e4d73d0039af119866d7e%2FSkylar_Geidt.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fnvxmqufxogry%2FDCX5igdj3acW1jo6Nkkoc%2F0911cdb9c12e4d73d0039af119866d7e%2FSkylar_Geidt.png&w=64&q=75 2x"
                  src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fnvxmqufxogry%2FDCX5igdj3acW1jo6Nkkoc%2F0911cdb9c12e4d73d0039af119866d7e%2FSkylar_Geidt.png&w=64&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <span
                className="text-xs leading-none text-gray600"
                data-contentful-field-id="name"
                data-contentful-entry-id="4hjlJX04OL8aR17QgbDmOE"
              >
                Skylar Geidt
              </span>
            </div>
            <div
              className="ml-auto pl-2 text-xs text-gray600"
              data-contentful-field-id="publishedDate"
              data-contentful-entry-id="24K074hJ0Wjoh9Lq4cyWdd"
            >
              December 3, 2022
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
