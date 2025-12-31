const http = require('http');

http.createServer((req, res) => {
  // Disable caching
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  res.end("CI/CD Auto deploy done3 Successfully 🚀");
}).listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});

