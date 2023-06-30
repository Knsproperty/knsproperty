import React from "react";

export default async function page() {
  const data = await getData();
  return <div>{JSON.stringify(data)}</div>;
}

async function getData() {
  let buy_properties = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/search/rent`
  );
  return await buy_properties.json();
}
