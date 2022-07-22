const data = require("./data");

function changeKeyObject(data) {
  data.forEach((el) => {
    el.tinggi = el.tinggibadan;
    delete el.tinggibadan;
  });
  return data;
}

console.log(changeKeyObject(data));
