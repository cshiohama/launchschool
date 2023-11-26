const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL;

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    let myURL = new URL(path, `http://localhost:${PORT}`);
    let params = myURL.searchParams;
    let sides = params.get('sides');
    let rolls = params.get('rolls');
    
    for (let i = 0 ; i < rolls ; i++) {
      res.write(`${roll(1, sides)}\n`);   
    }
    
    res.write(`\n`);
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

function roll(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});