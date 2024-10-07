const dateFormatter = (date: string) =>
  new Date(date).toLocaleString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default dateFormatter;
