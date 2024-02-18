const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req,res) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next) => {
    res.send('<h1>Hello from server!</h1>');
});



app.listen(3000);