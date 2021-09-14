const express = require('express');
const app = express();
const path = require('path')
const pug = require('pug')

app.set('view engine', 'pug')

const defaultOptions = {
  viewPath: path.resolve(__dirname, 'views', 'pages'),
  basedir: path.resolve(__dirname, 'views', 'partials')
}

app.get('/', function (req, res) {
   res.render('pages/index', {...defaultOptions, ...{
     title: 'Kiln Graphics',
     page: "home"
   }})
})

app.use(express.static(__dirname + "/public"))

app.get("*", async function (req, res, next) {
  try {
    throw {err: 404}
  } catch (err) {
    return next(err)
  }
})

app.use(function (err, req, res, next) {
  res.status(err.err || 500).render('pages/error', {...defaultOptions, ...{
    title: 'Kiln Graphics | ' + (err.err || 500),
    error: err.err || 500,
    page: "error"
  }})
})
//
// app.get("*", function (req, res) {
//   res.render("pages/error", {...defaultOptions, ...{
//     title: 'Kiln Graphics | ' + 404,
//     error: 404,
//     page: "error"
//   }})
//   res.status(404)
// })

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
