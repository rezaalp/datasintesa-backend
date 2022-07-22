const data = require("./data");

let makananFav = {
  "cecep budiman": "ramen",
  ismail: "iga bakar",
  aldi: "ayam pop",
  raditya: "rendang",
};
function makananFavorit(data) {
  for (let i = 0; i < data.length; i++) {
    let access = data[i];
    for (const key in makananFav) {
      if (access.name === key) {
        access.makananfavorit = makananFav[key];
        break;
      } else {
        if (!access.hasOwnProperty("makananfavorit")) {
          access.makananfavorit = "ayam goreng";
        }
      }
    }
  }
  return data;
}
console.log(makananFavorit(data));
