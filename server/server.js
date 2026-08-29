import { createServer } from 'node:http';
import { EventEmitter } from 'node:events';


const hostname = '127.0.0.1';
const port = 3000;
//const getNumberEvent = new EventEmitter();

/*getNumberEvent.on("receive-number", (numberString) => {
    const numberValue = Number(numberString);
    console.log("received a number\nValue:", numberValue);
});*/

const server = createServer((req, res) => {
  const {url, headers, method} = req; // why url, headers, method dark blue, fix later
  var body = [];
  var numberValue = Number(body);
  
  req.on("data", (chunk) => { // this part will store req body in body array
    body.push(chunk);
  })
  .on("end", () =>{
    body = Buffer.concat(body).toString();
  });
  
  console.log("received a number\nValue:", numberValue);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.end("received number");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});