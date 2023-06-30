import React from "react";

export default async function page() {
  const data = await getData();
  return <div>{JSON.stringify(data)}</div>;
}

async function getData() {
  let buy_properties = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/search/buy?bedrooms=3`
  );
  return await buy_properties.json();
}
