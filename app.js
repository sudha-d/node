  var http = require('http')

http.createServer(function(req,res){
    res.write("Welcome Back Alien!!!")
    res.end()
    }).listen(8080)