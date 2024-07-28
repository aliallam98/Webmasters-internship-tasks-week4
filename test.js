const  fs = require("fs")

setTimeout(() => console.log("Timer 1"), 1000);

fs.readFile(__filename, () => {  // CB to add to I/O Queue until readFile is completed
    //Which means setImmediate going to run before it . 
  console.log("file"); 
});
setTimeout(() => console.log("Timer 2"), 1000);
setTimeout(() => console.log("Timer 3"), 1000);

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
setImmediate(()=>console.log("setImmediate"))