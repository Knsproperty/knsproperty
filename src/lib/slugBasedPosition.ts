const slugBasesPosition = (teams: any) => {
  return teams?.data;
  // return teams?.data?.map((_: any, index: number) => {
  //   const pos = index + 1;
  //   return (
  //     teams.data.filter((T: any) => parseInt(T.attributes.slug) == pos)[0] ??
  //     null
  //   );
  // });
};

export default slugBasesPosition;

const differentiation = 'Co-Founder / Managing Partner';
export const filterLeaders = (profiles: any) => {
  return profiles.filter(
    (profile: any) => differentiation == profile?.attributes?.Position
  );
};

export const filterOthers = (profiles: any) => {
  return profiles.filter(
    (profile: any) => differentiation !== profile?.attributes?.Position
  );
};
