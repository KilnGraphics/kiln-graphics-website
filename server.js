const express = require('express');
const app = express();
const path = require('path')
const pug = require('pug')

app.set('view engine', 'pug')

app.get('/', function (req, res) {
   res.render('pages/index', {
     title: 'Kiln Graphics',
     viewPath: path.resolve(__dirname, 'views', 'pages'),
     basedir: path.resolve(__dirname, 'views', 'partials'),

   })
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
