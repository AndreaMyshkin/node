const fs = require ('fs');

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;   
    if (url ==='/'){
         res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><h1>Inserta un mensaje </h1><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">send </button></form></body>')
        res.write('</html>')
        return res.end()
      }
      if( url ==='/message' && method ==='POST'){
        const body = []
        req.on('data', (chunk) =>{
          console.log(chunk)
          body.push(chunk)
        })
        req.on('end', () =>{
          const parsedBody = Buffer.concat(body).toString()
          const message = parsedBody.split('=')[1];
          fs.writeFile('text.txt', message, err=>{
            res.statusCode =302;
            res.setHeader('Location', '/');
            return res.end()
          });
        })
    
     
    }
    
     
      
}

module.exports = requestHandler