var http = require("http");
http.createServer(function (req, res) {
    console.log("Hello World");
    var storage = require("node-persist");
    var yargs = require("yargs");
    var argv = yargs.argv;
    var isPrime = require("./checkPrime");
    console.log(isPrime.ktsnt(argv.n));
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(3000, "127.0.0.1");