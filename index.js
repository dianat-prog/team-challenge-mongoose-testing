const express=require('express');
const app=express();
const PORT =8080;
const dbConnection = require('./config/config.js')
const routes = require ('./routes')
const http = require('http');

// Crear servidor HTTP
const server = http.createServer(app);

app.use(express.json());

app.use('/',routes);

dbConnection();



server.listen(PORT,()=>{
    console.log(`Server start on port ${PORT}`)
})

module.exports =app;