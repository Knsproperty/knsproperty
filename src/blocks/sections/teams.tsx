import { Main } from '@/types/team';
import TeamCard from '../molecules/cards/team-card';

export default function Teams({ teams }: { teams: Main[] }) {
  return teams.map((member, index) => {
    // this (member !== null) prevent error caused by sorting (absent of index)
    if (member !== null) {
      return (
        <TeamCard
          key={index}
          name={member.attributes.Name}
          slug={member.attributes.slug}
          image={member.attributes.Profile.data.attributes.url}
          role={member.attributes.Position}
        />
      );
    }
  });
}
