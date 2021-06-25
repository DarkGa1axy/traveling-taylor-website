var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
const reviewdatafull = Object.assign({}, reviewdata);

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
