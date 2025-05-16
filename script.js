// let fruitinfo = require("./fruits");
// for (let i=0 ; i< fruitinfo.length ; i++){
//     console.log(fruitinfo[i]);
// }


// // figlet drectory ku acquire kare script js me ander jo ke dusri file hai figlet name ke folder me 
// let figlet = require("./figlet/index");
// console.log(figlet);


// mathjs ke ander  ke function import ki madad se use karre ham 
 import { sum , mul} from "./math.js"
 import { generateSlug } from "random-word-slugs";
 console.log(sum(2,2))
 
const slug = generateSlug();
console.log(slug);


