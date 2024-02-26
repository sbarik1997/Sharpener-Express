const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const chatRouter = require('./routes/chatApp');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRoute = require('./routes/contactUs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRouter);
app.use(shopRouter);
app.use(contactRoute);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.use(chatRouter);






// app.use((req,res,next) => {
//     res.status(404).send('<h1>Page Not Found!</h1>')
// })


app.listen(3000);