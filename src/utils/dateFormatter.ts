const dateFormatter = (date: string) => {
  const dateInput = new Date(date);
  const formattedDate = dateInput.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};

export default dateFormatter;
