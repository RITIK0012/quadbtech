const fetch = require("node-fetch");
const StockData = require('../model/stockDataSchema');
const express = require('express');
const router = express.Router();

router.get('/addData', async(req, res)=> {
    var count=0;
    const url = 'https://api.wazirx.com/api/v2/tickers';
    const response = await fetch(url);
    const jsonResponse = await response.json();
        for (const key in jsonResponse) {
            if (jsonResponse.hasOwnProperty(key)) {
                const item = jsonResponse[key];
                const stockData = StockData({
                    name : item.name,
                    last: item.last,
                    buy:item.buy,
                    sell: item.sell,
                    volume:item.volume,
                    base_unit: item.base_unit,
                });
                if(count<10){
                    stockData.save();
                    count++;
                }     
        }
    }
    res.status(200).send({'Message' : 'Added Successfully'});

});

router.get('/stockData', async (req, res)=>{

    
    const stockDatas = await StockData.find();
    res.status(200).send(stockDatas);
});


module.exports = router;