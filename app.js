const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}))

//Adding Middlewares
app.use('/addProduct', (req, res, next) => {
   
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>')
  });

app.use('/product', (req,res, next)=>{

    console.log(req.body)
    res.redirect('/')
})  
  
app.use('/', (req, res, next) => {

  res.send("<h1>Hello world, from express!</h1>");
});

app.listen(3012);
