const express = require('express');
const app = express();
const path = require('path')
const pug = require('pug')

app.set('view engine', 'pug')
const mods = require('./config/mods.js')
const libraries = require('./config/libraries.js')
const icons = require('./config/icons.js')[0]
const devs = require('./config/devs.js')


const defaultOptions = {
  viewPath: path.resolve(__dirname, 'views', 'pages'),
  basedir: path.resolve(__dirname, 'views', 'partials'),
  mods: mods,
  libraries: libraries,
  icons: icons
}

app.get('/', function (req, res) {
   res.render('pages/index', {...defaultOptions, ...{
     title: 'Kiln Graphics',
     page: "home"
   }})
})

app.get('/about', function (req, res) {
   res.render('pages/about', {...defaultOptions, ...{
     title: 'Kiln Graphics | About Us',
     page: "about",
     devs: devs
   }})
})

for (let i in libraries) {
  let library = libraries[i];
  let data = require('./config/library/' + library.id + '.js')
  app.get('/' + library.id, function (req, res) {
    res.redirect("/library/" + library.id)
  });

  app.get('/library/' + library.id, function (req, res) {
     res.render('pages/project', {...defaultOptions, ...{
       title: 'Kiln Graphics | ' + library.name,
       page: "libraries",
       project: data
     }})
  })
}

for (let i in mods) {
  let mod = mods[i];
  let data = require('./config/mod/' + mod.id + '.js')

  app.get('/' + mod.id, function (req, res) {
    res.redirect("/mod/" + mod.id)
  });

  app.get('/mod/' + mod.id, function (req, res) {
     res.render('pages/project', {...defaultOptions, ...{
       title: 'Kiln Graphics | ' + mod.name,
       page: "mods",
       project: data
     }})
  })
}



app.use(express.static(__dirname + "/public"))

app.get("*", async function (req, res, next) {
  try {
    throw {err: 404}
  } catch (err) {
    return next(err)
  }
})

app.use(function (err, req, res, next) {
  console.log(err)
  res.status(err.err || 500).render('pages/error', {...defaultOptions, ...{
    title: 'Kiln Graphics | ' + (err.err || 500),
    error: err.err || 500,
    page: "error"
  }})
})



var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
