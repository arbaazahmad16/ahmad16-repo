const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from ENVIRONMENT");
  res.end();
}).listen(3000);
