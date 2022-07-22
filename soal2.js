const data = require("./data");

function findCecep(data) {
  const filtered = data.filter((el) => el.name.includes("cecep"));
  return filtered[0];
}
console.log(findCecep(data));
