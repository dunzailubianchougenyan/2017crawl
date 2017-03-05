var express = require('express');
var Movie = require('./model').Movie;
var path = require('path');
var app = express();
app.use(express.static(__dirname));
//设置模板引擎
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);

app.get('/',function (req, res) {
    Movie.find({},function (err, movies) {
        res.render('index',{movies});
    })
});
app.listen(80);