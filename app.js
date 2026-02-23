console.log("Hello Lab 4");

const fs = require("fs");

// Read the contents of a file
fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});

// Write to a file
fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});

//Create web server
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080");

//Making an HTTP request
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});