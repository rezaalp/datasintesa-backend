const data = require("./data");

function sortTinggiBadan(data) {
  return data.sort((a, b) => a.tinggibadan - b.tinggibadan);
}

console.log(sortTinggiBadan(data));
