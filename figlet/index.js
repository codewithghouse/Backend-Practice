const figlet= require("figlet");
figlet("Ghouse Acd nd Alisha ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

module.exports = figlet;
