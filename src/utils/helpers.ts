const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  // @ts-ignore
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Extract the day from the date
  const day = date.getDate();
  // Convert day to a string with appropriate suffix
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  // Split the formatted date into parts (e.g., ['July', '24,','2023'])
  const dateParts = formattedDate.split(" ");

  // Replace the day part with the day with suffix (e.g., '24' -> '24th')
  dateParts[1] = dayWithSuffix;

  // Join the parts and return the formatted date
  const finalFormattedDate = dateParts.join(" ");

  return finalFormattedDate;
}
export { isValidEmail, formatDate };
