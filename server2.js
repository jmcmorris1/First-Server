/*One that listens on port 7000 and one that listens on port 7500. 
     • The one listening on port 7000 will always tell the user something good about themselves. 
     • The one listening on 7500 will always tell the user something bad about themselves. 
     • Make sure you create a Github repo and *commit this code!**/

var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;
var PORT3 = 3005;

function handleRequest1(request, response) {
    response.end("Hey now you're an allstar, get your game on go play!");
}

function handleRequest2(request, response) {
    response.end("You did bad and you should feel bad!!");
}

function handleRequest3(request, response) {
    response.end("I'll be right by your side, till 3005 hold up!!");
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);
var server3 = http.createServer(handleRequest3);

server1.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:%s", PORT1);
});
server2.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:%s", PORT2);
});
server3.listen(PORT3, function() {
    console.log("Server listening on: http://localhost:%s", PORT3);
});