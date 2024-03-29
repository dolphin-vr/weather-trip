export const todayDate = () => new Date();

export const maxDate = (date, shift) => {
  const result = new Date(date);
  result.setDate(result.getDate() + shift);
  return result;
};

export const dateLocal = (date) => {
  if (date) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const result = new Date(date);
    return result.toLocaleDateString("ua-UA", options);
  }
  return "";
};

export const dateISO = (date) => {
  const result = new Date(date);
  return `${result.getFullYear()}-${(result.getMonth() + 1).toString().padStart(2, 0)}-${result.getDate().toString().padStart(2, 0)}`;
};

export const weekDay = (day = todayDate()) => {
  const options = {
    weekday: "long",
  };
  const today = new Date(day);
  return today.toLocaleDateString("en-US", options).split(",").shift();
};

