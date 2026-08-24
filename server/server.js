import { createServer } from 'node:http';
import { EventEmitter } from 'node:events';


const hostname = '127.0.0.1';
const port = 3000;
const getNumberEvent = new EventEmitter();

getNumberEvent.on("receive-number", (numberString) => {
    const numberValue = Number(numberString);
    console.log("received a number\nValue:", numberValue);
});

const server = createServer((req, res) => {
  const {url, headers, method} = req;

  if(!req.body){
    getNumberEvent.emit("receive-number", req.body);
  }
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.end("received number");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});