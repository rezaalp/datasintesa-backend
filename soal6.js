const data = require("./data");

function changePlace(data) {
  const hqIndex = data.findIndex((el) => el.name === "hq");
  let hqData = data[hqIndex];
  data = data.filter((el, index) => index !== hqIndex);
  const ismailIndex = data.findIndex((el) => el.name === "ismail");

  data.splice(ismailIndex + 1, 0, hqData);
  return data;
}

console.log(changePlace(data));
