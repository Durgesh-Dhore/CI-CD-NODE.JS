const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD Auto deploy Successfully 🚀");
}).listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});

