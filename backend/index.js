var port = 8080;
const express = require('express');
const app = express();
var bodyParser= require('body-parser');
var fileUpload= require("express-fileupload");

app.use(express.static('static'));
app.use(bodyParser.json())
app.use(fileUpload());


// https://malcoded.com/posts/angular-backend-express/
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body)
})

app.listen(port);
