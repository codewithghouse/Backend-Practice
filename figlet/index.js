const figlet= require("figlet");
figlet("Code With Ghouse ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

module.exports = figlet;
