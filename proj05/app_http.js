var http = require("http");
var fs = require("fs");

fs.readFile("./a.html",function(err,html){
    if(err){
        throw err;
    }
    http.createServer(function(req,res){
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(html);
        res.end();
    }).listen(8080)
});


console.log("Servidor ativo");