const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD Working Successfully 🚀");
}).listen(3000);

