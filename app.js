const express = require('express')
const app = express()
const path = require('path')

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.use(express.static(path.join(__dirname, './styles')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/home.html'))
})

app.use(function (req, res, next) {
  console.log('logged')
  next()
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})


app.get('/big',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})

app.get('/Vijay',  (req, res) =>{
  res.send('<h1>Hello Vijay!</h1>')
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

