const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD Auto Deployment Successfully 🚀");
}).listen(3000);

