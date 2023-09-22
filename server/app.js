const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express= require('express');
const app = express();
const cors = require('cors');
dotenv.config({path: './config.env'});
require('./db/conn');
app.use(express.json());
app.use(cors())
app.use(require('./router/stockData'));
const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})