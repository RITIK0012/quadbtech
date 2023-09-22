import React, { useEffect, useState } from 'react';
import "../page/cs/home.css";
import { getAllData } from "../utils/HandleApi";
import Value from './Value';
const Home = () => {
  const [data , setData] = useState([])
  useEffect(()=>{
  getAllData(setData);
  },[])
  return (
    <div className='home_page'>
      <h4 className='heading'>Best Price to Trade</h4>
      <div className='top_section'>
        <div className='minute'>
            <h4>0.74 % </h4>
            <h5>5 Mins </h5>
        </div>
        <div className='hour'>
            <h4>1.65 %</h4>
            <h5>1 Hour</h5>
        </div>
        <div className='best_price'>
            <h2>₹ 23,97,997</h2>
        </div>
        <div className='day'>
            <h4>5.44 %</h4>
            <h5>1 Day</h5>
        </div>
        <div className='days'>
            <h4>9.66 %</h4>
            <h5>7 Days</h5>
        </div>
      </div>
      <h5 className='bottom_heading'>Average BTC/INR net price including commision</h5>
      <div className='bottom_section'>
        <div className="stock_heading">
            <div className='platform'>Platform</div>
            <div className='last_traded_price'>Last Traded Price</div>
            <div className='buy_sell_price'>Buy Sell Price</div>
            <div className='difference'>Volume</div>
            <div className='savings'>Base_Unit</div>
        </div>
        <div className='list'>
          {data.map((item)=> <Value key= {item._id} name= {item.name} last={item.last} buy={item.buy} sell={item.sell} volume={item.volume} base_unit={item.base_unit}/>)}
        </div>
      </div>
    </div>
  )
}

export default Home
