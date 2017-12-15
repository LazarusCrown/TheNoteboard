const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/login', (req,res) => {
    
})

app.post('/signup', (req,res) => {

})

app.listen(3000, function(){
    console.log('listening on port 3000');
})