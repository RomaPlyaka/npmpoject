const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`)
})
app.get('/contacts', function (req, res) {
  res.sendFile(`${__dirname}/public/contacts.html`)
})
app.get('/post', function (req, res) {
  res.sendFile(`${__dirname}/public/contacts.html`)
})
const port = 3000
 
app.listen(3000, '0.0.0.0',()=>{
  console.log (`Server start...in host http://0.0.0.0: ${port}`)
})
