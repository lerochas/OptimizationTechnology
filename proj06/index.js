const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Bem vindo!");
});

app.get("/sobre/:idade/:nome",function(req,res){
    res.send("<h2>Bem-vindo, " + req.params.nome + "</h2>");
});

app.listen(8080, function(){
    console.log("Servidor Ativo!");
});