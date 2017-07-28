/**
 * Created by duong on 7/27/17.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');


var jwt = require('jsonwebtoken'); // Được sử dụng để tạo, đăng ký và xác minh các thẻ
var config = require('./config');    // lấy tệp tin cấu hình
var User = require('./app/models/user'); // lấy mô hình mongoose

// Cấu hình
var port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecrect' , config.secret);

//use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

//Sử dụng morgan để ghi lại yêu cầu đến giao diện điều khiển
app.use(morgan('dev'));

// routes
//basic route
app.get('/', function (req , res) {
    res.send('Hello ! The API is at http://localhost :' + port + '/api');
});

app.listen(port);
console.log('Magic happens at http://localhost : ' + port);



