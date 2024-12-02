const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Response from Backend Server 2\n');
});

server.listen(8082, () => {
    console.log('Backend Server 2 is running on port 8082');
});