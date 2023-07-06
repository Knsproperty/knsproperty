import React from "react";
import TeamCard from "../molecules/cards/team-card";
import { Main } from "@/types/team";
import strapi from "@/utils/strapi";

export default async function Teams() {
  const teams = await strapi.find<Main[]>("teams", {
    populate: ["*", "Profile"],
  });

  return teams.data.map((member, index) => (
    <TeamCard
      key={index}
      name={member.attributes.Name}
      slug={member.attributes.slug}
      image={`https://ksnpropertiesstrapi-production.up.railway.app${member.attributes.Profile.data.attributes.url}`}
      role={member.attributes.Position}
    />
  ));
}

export const revalidate = 3600000;
