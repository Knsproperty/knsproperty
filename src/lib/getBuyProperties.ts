// Function to fetch data using the Fetch API
async function get_buy_properties() {
  let buy_properties = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/buy`, {
    cache: "force-cache",
  });
  return await buy_properties.json();
}
