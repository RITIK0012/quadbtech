import React from 'react';
import "../page/cs/home.css";
const Value = ({name, last, buy, sell, volume, base_unit}) => {
  return (
    <div>
      <div className="stock_value">
            <div className='platform_value'>{name}</div>
            <div className='last_traded_price_value'>₹ {last}</div>
            <div className='buy_sell_price_value'>₹ {buy}/₹ {sell}</div>
            <div className='difference_value'>{volume}</div>
            <div className='savings_value'>{base_unit}</div>
        </div>
    </div>
  )
}

export default Value
