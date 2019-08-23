var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();

var requestTime = function (req, res, next) {
    req.requestTime = new Date();
    next();
}

var homeLink = '<a href="/home">Goto home</a>';

app.use(requestTime)


// app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "views/weekDays.html");
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/" + "views/weekDays.html");
});

app.get('/sunday', (req, res) => {
    var responseText = homeLink + ' You are in Sunday link!!!!<br>'
    responseText += '<b>Requested at: ' + req.requestTime + '</b>'
    res.send(responseText);
});

app.get('/monday', (req, res) => {
    var responseText = homeLink + ' You are in monday link!!!!<br>'
    responseText += '<b>Requested at: ' + req.requestTime + '</b>'
    res.send(responseText);
});


app.get('/tuesday', (req, res) => {
    var responseText = homeLink + ' You are in tuesday link!!!!<br>'
    responseText += '<b>Requested at: ' + req.requestTime + '</b>'
    res.send(responseText);
});

app.get('/wednesday', (req, res) => {
    var responseText = homeLink + ' You are in wednesday link!!!!<br>'
    responseText += '<b>Requested at: ' + req.requestTime + '</b>'
    res.send(responseText);
});

app.get('/thirsday', (req, res) => {
    var responseText = homeLink + ' You are in thirsday link!!!!<br>'
    responseText += '<b>Requested at: ' + req.requestTime + '</b>'
    res.send(responseText);
});

app.get('/friday', (req, res) => {
    var responseText = homeLink + ' You are in friday link!!!!<br>'
    responseText += '<b>Requested at: ' + req.requestTime + '</b>'
    res.send(responseText);
});

app.get('/saturday', (req, res) => {
    var responseText = homeLink + ' You are in saturday link!!!!<br>'
    responseText += '<b>Requested at: ' + req.requestTime + '</b>'
    res.send(responseText);
});

app.listen(3000, () => {
    console.log('Sever listen on port 3000');
})

//create a server object without using express server:
// http.createServer(function (req, res) {
//     console.log('Server created!!!!!!!!');
//     res.end();
//     // fs.readFile("index.html", function (err, data) {
//     //     if (err) {
//     //         res.writeHead(404, {'Content-Type': 'text/html'});
//     //         return res.end("404 Not Found");
//     //       }  
//     //     res.writeHead(200, { 'Content-Type': 'text/html' });
//     //     // var datetime = new Date().toLocaleTimeString();
//     //     var datetime = new Date();
//     //     res.write(data); 
//     //     res.end('<h1>' + datetime + '<h1>');
//     // });
// }).listen(8082); //the server object listens on port 8080
