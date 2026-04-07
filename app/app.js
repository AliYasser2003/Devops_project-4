const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Project 4 CI/CD is working \n new version with EKS');
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
