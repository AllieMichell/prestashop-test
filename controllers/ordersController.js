const request = require('request');
const dotenv = require('dotenv').config();

var token = process.env.TOKEN;
var host = process.env.HOST;

const ordersController = {};

var dataOrders = [];

ordersController.getOrders = (req, res) =>{
    
    request.get(`https://${token}@${host}/api/orders?output_format=JSON`, (err, response) => {
        if(err){
            res.send(err);
        } else {
            var data = JSON.parse(response.body);
            var dataO = (data.orders)
            for(var i = 0; i < dataO.length; i++){
                var id = dataO[i].id;
                request.get(`https://${token}@${host}/api/orders/${id}?output_format=JSON`, (err, response) => {
                    if(err){
                        res.send(err);
                    } else {
                        var dataFO =  JSON.parse(response.body);
                        var dataFOO = dataFO.order;
                        dataOrders.push(dataFOO);
                    }
                })
            }
            res.send(dataOrders);
            dataOrders = [];
        }
        // res.send(dataOrders);    
    });
    // res.send(dataOrders);
}



module.exports = ordersController;