import React from "react";
import TeamCard from "../molecules/cards/team-card";
import { Main } from "@/types/team";
import strapi from "@/utils/strapi";

export default async function Teams({ teams }: { teams: Main[] }) {
  return teams.map((member, index) => (
    <TeamCard
      key={index}
      name={member.attributes.Name}
      slug={member.attributes.slug}
      image={member.attributes.Profile.data.attributes.url}
      role={member.attributes.Position}
    />
  ));
}
