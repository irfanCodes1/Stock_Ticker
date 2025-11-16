import { getStockData } from './fakeStockApi.js';

setInterval(function(){
    const stockData=getStockData();
    renderStockTicker(stockData);
},1500)



function renderStockTicker(stockData){
    const stockDisplayName=document.getElementById("name");
    const stockDisplaySymbol=document.getElementById("symbol");
    const stockDisplayPrice=document.getElementById("price");
    const priceIcon=document.getElementById("price-icon")
    const stockDisplayTime=document.getElementById("time");

    const  {name,symbol,price,time}=stockData;

    stockDisplayName.innerText=`Name:   ${name}`;
    stockDisplaySymbol.innerText=`Symbol:  ${symbol}`
    stockDisplayPrice.innerText=`Price:  ${price}`;
    stockDisplayTime.innerText=`TSime:  ${time}`;
}