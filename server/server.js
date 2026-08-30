import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  let body = [];
  
  req.on("error", (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on("error", (err) => {
    console.error(err);
  })

  req.on("data", (chunk) => { // this part will store req body in body array
    body.push(chunk);
  })
  .on("end", () =>{
    body = Buffer.concat(body).toString();
    console.log("request stream ended");
    let numberValue = Number(body);
    console.log("received a number\nValue:", numberValue);
    
    if(typeof(numberValue) === "number"){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
      res.end("received number");
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});