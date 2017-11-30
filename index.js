const http = require('http');
const fs = require('fs');

fs.readFile('index.html', (err, data) => {
  if (err) throw err; 
  http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
    } else {
        fs.readFile('404.png', (err, data) => {
          res.writeHead(200, {'Content-Type': 'image/png'});
          if (err) throw err; 
          res.end(data);
        })
    } 
  }).listen(8080);
  console.log('Server running at http://localhost:8080/');
});
