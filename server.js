const express = require('express')//require of express
const app = express()//app is name.. u can say aakash=app
const db = require('./db');

//menu of waiter
app.get('/', function (req, res) {
    res.send('How can i help you sir..')
})

app.listen(4000,()=>{
    console.log("Listening on port number 4000")
})//server at address of localhost 4000