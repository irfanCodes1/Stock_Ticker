import { getStockData } from './fakeStockApi.js';

setInterval(function(){
    const stockData=getStockData();
    renderStockTicker(stockData);
},1500)

let previousPrice=null;



function renderStockTicker(stockData){
    const stockDisplayName=document.getElementById("name");
    const stockDisplaySymbol=document.getElementById("symbol");
    const stockDisplayPrice=document.getElementById("price-value");
    const priceIcon=document.getElementById("price-icon");

    const stockDisplayTime=document.getElementById("time");

    const  {name,symbol,price,time}=stockData;
    const priceDirectionIcon=price>previousPrice?'green_triangle.png':price<previousPrice?'Red_triangle.svg.png':'ArrowRight-gray.svg'
    const priceIconEl=document.createElement("img");
    priceIconEl.src=`images/${priceDirectionIcon}`;
    priceIconEl.alt=`price direction icon`;
    priceIcon.src = `images/${priceDirectionIcon}`;


    stockDisplayName.innerText=`Name:   ${name}`;
    stockDisplaySymbol.innerText=`Symbol:  ${symbol}`
    stockDisplayPrice.innerText=`Price:  ${price}`;
    stockDisplayTime.innerText=`Time:  ${time}`;
    previousPrice=price;
}