const slugBasesPosition = (teams: any) => {
  return teams?.data.sort(
    (a: any, b: any) => Number(a.attributes.slug) - Number(b.attributes.slug)
  );
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
