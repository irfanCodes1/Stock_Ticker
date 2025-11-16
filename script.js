import { getStockData } from './fakeStockApi.js';

setInterval(function(){
    const stockData=getStockData();
    renderStockTicker(stockData);
},1500)

let previousPrice=null;



function renderStockTicker(stockData){
    const stockDisplayName=document.getElementById("name");
    const stockDisplaySymbol=document.getElementById("symbol");
    const stockDisplayPrice=document.getElementById("price");
    const priceIcon=document.getElementById("price-icon")
    const stockDisplayTime=document.getElementById("time");

    const  {name,symbol,price,time}=stockData;
    const priceDirectionIcon=price>previousPrice?'images/images.png':price<previousPrice?'images/Red_triangle.svg.png':'ArrowRight-gray.svg'

    stockDisplayName.innerText=`Name:   ${name}`;
    stockDisplaySymbol.innerText=`Symbol:  ${symbol}`
    stockDisplayPrice.innerText=`Price:  ${price}`;
    stockDisplayTime.innerText=`TSime:  ${time}`;
}