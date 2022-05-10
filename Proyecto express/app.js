var express = require('express');
var app = express();

app.get('/adios', function(req, res) {
    res.send('hola mundo!');
});
app.get('/adios', function(req, res) {
    res.send('adios mundo!');
});

app.listen(3000, function(){
    console.log('Aplicacion ejemplo, escuchando el puerto 3000!');
});