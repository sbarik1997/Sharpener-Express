const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/login', (req,res) => {
    res.send('<form action="/login" method="post" onSubmit="localStorage.setItem(`username`, document.getElementById(`usernameId`).value)"><input type="text" name="username" id="usernameId" required><button type="submit">Login</button></form>'); 
});

router.post('/login',(req,res) => {
    res.redirect('/');
});

router.get('/', (req,res) => {
    fs.readFile('messageFile.txt', (err,data) => {
        if(err){
            data = "no chat available"
        }
        res.send(`\n${data}<form action="/message" method="post" onSubmit="document.getElementById('hiddenInputId').value = localStorage.getItem('username')">
        <input type="text" name="message">
        <input type="hidden" id="hiddenInputId" name="hiddenInput">
        <button type="submit">send message</button></form>
        `);
    })
});

router.post('/message',  (req,res) => {
    console.log(req.body.message, req.body.hiddenInput);
    fs.writeFile('messageFile.txt', `${req.body.hiddenInput}:${req.body.message}`, {flag: 'a'}, (err) => {
       err ? console.log(err) : res.redirect('/');
    });
})


module.exports = router;