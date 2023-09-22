const mongoose = require('mongoose')

const stockDataSchema = new mongoose.Schema({
    name:{
        require: true,
        type: String,
    },
    last:{
        require:true,
        type:Number,
    },
    buy:{
        require:true,
        type:Number,
    },
    sell:{
        require:true,
        type:Number,
    },
    volume:{
        require:true,
        type:Number,
    },
    base_unit:{
        require: true,
        type: String,
    },
});

module.exports = mongoose.model('StockData', stockDataSchema);