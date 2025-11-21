const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const api = process.env.HOST;
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));

const db = require('./config/db_config');

app.get('/',(req,res)=>{res.sendFile(__dirname+'/public/index.html')})
app.use('/users',require('./routers/users_R'));
app.listen(port,()=>{console.log(`http://${api}:${port}`)})