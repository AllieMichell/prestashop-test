// https://gsferreira.com/archive/2014/12/overcome-the-depth_zero_self_signed_cert-on-nodejs/
var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// if ("development" == app.get("env")) {
//     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// }

//Routes
const ordersRoute = require('./routes/ordersRoutes');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var url = '/presta-shop'
app.use(`${url}/orders`, ordersRoute)


module.exports = app;
