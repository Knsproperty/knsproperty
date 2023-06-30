import React from "react";
import Container from "../atoms/container";
import Info_Card from "../molecules/cards/info-card";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { MdEmail, MdMobileScreenShare } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { FaUsers } from "react-icons/fa";
export interface CardData {
  Icon: IconType;
  title: string;
  desc: string;
  action: {
    text: string;
    href: string;
  };
  color: string;
}
const _data: CardData[] = [
  {
    Icon: MdEmail,
    title: "Stay updated",
    desc: "We are here to answer all of your questions with a range of experts across the board. Between us, there's nothing we can't help you with!",
    action: {
      text: "Yes , Please",
      href: "/",
    },
    color: "green",
  },
  {
    Icon: MdMobileScreenShare,
    title: "Get in touch",
    desc: "We are here to answer all of your questions with a range of experts across the board. Between us, there's nothing we can't help you with!",
    action: {
      text: "Contact Us",
      href: "/",
    },
    color: "pink",
  },
  {
    Icon: FaUsers,
    title: "Stay updated",
    desc: "We are here to answer all of your questions with a range of experts across the board. Between us, there's nothing we can't help you with!",
    action: {
      text: "Our People",
      href: "/",
    },
    color: "green",
  },
];
export default function Info() {
  const info_items = _data.map((it, i) => <Info_Card {...it} key={i} />);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {info_items}
      </div>
    </Container>
  );
}
