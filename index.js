const initialPrice = document.querySelector('#initial-price')
const numberOfStocks = document.querySelector("#number-stocks")
const currentPrice = document.querySelector("#current-price")
const button = document.querySelector(".btn")
const result = document.querySelector('.result')
const div = document.querySelector(".content h1")

button.addEventListener('click', submitHandler);

function submitHandler() {
   var ip = initialPrice.value
   var qty = numberOfStocks.value
   var curr = currentPrice.value
   
   calculateProfitAndLoss(ip,qty, curr)
}




function calculateProfitAndLoss(initial,quantity, current) {



       if(initial > current) {
           
           let loss = (initial - current) * quantity
           let lossPercentage = Math.round((loss /initial) * 100);
           showOutput(`The total loss is ₹${loss} and percentage is ${lossPercentage}😢 😭😢 😭  `)
          

       } else if(initial < current) {

           let profit = (current - initial) * quantity;
           let profitPercentage = Math.round((profit/ initial) * 100)
           showOutput(`The total Profit is  ₹${profit} and percentage is ${profitPercentage}💸💸💸💸💸 `) 
          
       } else {
           // the rest of the logic  
           showOutput("No pain and  No gain. Thus, No gain and No pain 😜 ")
          

       }
}


function showOutput(message) {
    div.innerHTML = message;
    result.innerHTML = message;
}