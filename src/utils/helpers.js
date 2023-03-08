const options = { year: "numeric", month: "long", day: "numeric" };

export function formatBlogPostDate(date) {
  const dateString = new Date(date);
  const formattedDateString = dateString.toLocaleDateString("en-US", options);
  console.log(formattedDateString);
  return `${formattedDateString}`;
}
