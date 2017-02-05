console.log("Hello World");
var storage=require("node-persist");
var yargs=require("yargs");
var argv=yargs.argv;
var isPrime=require("./checkPrime");
console.log(isPrime.ktsnt(argv.n));