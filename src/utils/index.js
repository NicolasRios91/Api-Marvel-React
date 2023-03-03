export const randomCharacter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const formatCreators = (creators) => {
  let stringCreators = "";
  creators.forEach((element) => {
    stringCreators += `${element.role}: ${element.name} \n`;
  });
  return stringCreators;
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  let year = newDate.getFullYear();
  let day = newDate.getDate();
  let indexMonth = newDate.getMonth();
  let formattedDate = `${months[indexMonth]} ${day}, ${year}`;
  return formattedDate;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
