const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD Auto Deployment Done Successfully 🚀");
}).listen(3000);

