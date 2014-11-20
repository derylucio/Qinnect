var express=require("express"),
path=require("path"),
http=require("http"),
app=express(),
port=process.env.PORT || 5000;


app.use(express.static(__dirname + "/public"));

var server = http.createServer(app);

server.listen(port);

