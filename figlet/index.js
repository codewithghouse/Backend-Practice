 const figlet= require("figlet"); // this is package name 

// below code is for accessing the package 
figlet("Ghouse", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

module.exports = figlet;
