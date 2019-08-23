var http = require('http');
var fs = require('fs');
var homeLink = '<a href="/home">Goto home</a>';
var currentTime = new Date();

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // http header
    var url = req.url;
    if (url === '/home' || url === '/') {
        fs.readFile(__dirname + "/" + "views/weekDays.html", function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.write(data);
            res.end();
        });
    } else if (url === '/sunday') {
        var responseText = homeLink + ' You are in Sunday link!!!!<br>'
        responseText += '<b>Requested at: ' + currentTime + '</b>'
        res.write(responseText);  //write a response
        res.end(); //end the response
    } else if (url === '/monday') {
        var responseText = homeLink + ' You are in monday link!!!!<br>'
        responseText += '<b>Requested at: ' + currentTime + '</b>'
        res.write(responseText);  //write a response
        res.end(); //end the response
    } else if (url === '/tuesday') {
        var responseText = homeLink + ' You are in tuesday link!!!!<br>'
        responseText += '<b>Requested at: ' + currentTime + '</b>'
        res.write(responseText);  //write a response
        res.end(); //end the response
    } else if (url === '/wednesday') {
        var responseText = homeLink + ' You are in wednesday link!!!!<br>'
        responseText += '<b>Requested at: ' + currentTime + '</b>'
        res.write(responseText);  //write a response
        res.end(); //end the response
    } else if (url === '/thirsday') {
        var responseText = homeLink + ' You are in thirsday link!!!!<br>'
        responseText += '<b>Requested at: ' + currentTime + '</b>'
        res.write(responseText);  //write a response
        res.end(); //end the response
    } else if (url === '/friday') {
        var responseText = homeLink + ' You are in friday link!!!!<br>'
        responseText += '<b>Requested at: ' + currentTime + '</b>'
        res.write(responseText);  //write a response
        res.end(); //end the response
    } else if (url === '/saturday') {
        var responseText = homeLink + ' You are in saturday link!!!!<br>'
        responseText += '<b>Requested at: ' + currentTime + '</b>'
        res.write(responseText);  //write a response
        res.end(); //end the response
    } else {
        res.write('<h1>Hello World!<h1>'); //write a response
        res.end(); //end the response
    }
}).listen(3001, function () {
    console.log("server start at port 3001"); //the server object listens on port 3000
});