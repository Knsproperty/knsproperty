const slugBasesPosition = (teams : any) => {
  return teams?.data?.map((_ : any, index: number) => {
            const pos = index + 1;
            return teams.data.filter(
              (T: any) => parseInt(T.attributes.slug) == pos
            )[0] ?? null;
          })
}

export default slugBasesPosition