const data = require("./data");

function deleteKey(data) {
  data.forEach((el) => {
    delete el.goldarah;
  });
  return data;
}

console.log(deleteKey(data));
