import React from "react";

interface CardData {
  imageSrc: string;
  category: string;
  date: string;
  readingTime: string;
  title: string;
  link: string;
}

interface CardProps {
  cardData: CardData;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { imageSrc, category, date, readingTime, title, link } = cardData;

  return (
    <div>
      <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white  rounded-xl shadow  transition-all duration-500">
        <div className="relative overflow-hidden">
          <img src={imageSrc} className="" alt="" />
          <div className="absolute end-4 top-4">
            <span className="bg-primary text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">
              {category}
            </span>
          </div>
        </div>
        <div className="relative p-6">
          <div className="">
            <div className="flex justify-between mb-4">
              <span className="text-slate-400 text-sm">
                <i className="uil uil-calendar-alt text-slate-900  me-2" />
                {date}
              </span>
              <span className="text-slate-400 text-sm ms-3">
                <i className="uil uil-clock text-slate-900 me-2" />
                {readingTime}
              </span>
            </div>
            <a
              href={link}
              className="title text-xl font-medium hover:text-primary duration-500 ease-in-out"
            >
              {title}
            </a>
            <div className="mt-3">
              <a
                href={link}
                className="btn btn-link hover:text-secondary after:bg-green-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
