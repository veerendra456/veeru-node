const http = require('http');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello from Dockerized Node.js app!\n');
  } else if (req.url === '/users') {
    res.end('There are no users\n');
  } else if (req.url === '/files') {
    res.end('There are no files \n');
  } else {
    // res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
