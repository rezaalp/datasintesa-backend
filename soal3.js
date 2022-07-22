const data = require("./data");

function changeTinggiBadan(data) {
  const indexData = data.findIndex((el) => el.name === "hq");
  data[5].tinggiBadan = 170;
  return data;
}

console.log(changeTinggiBadan(data));
