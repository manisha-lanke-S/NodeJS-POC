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
});
