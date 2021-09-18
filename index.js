const initialPrice = document.querySelector('#initial-price')
const numberOfStocks = document.querySelector("#number-stocks")
const currentPrice = document.querySelector("#current-price")
const button = document.querySelector(".btn-calculate")
const result = document.querySelector('.result')

button.addEventListener('click', submitHandler);

function submitHandler() {
   var ip = initialPrice.value
   var qty = numberOfStocks.value
   var curr = currentPrice.value
   
   calculateProfitAndLoss(ip,qty, curr)
}




function calculateProfitAndLoss(initial,quantity, current) {

    if (initial === "" || current === "" || quantity === "") {
        showOutput("Inital Rate / Quantity of Stocks / Current Rate cannot be empty")
    } else if( Number(initial) <=0 || Number(quantity) <=0) {
        showOutput("Initial rate OR quantity cannot be zero or less than zero")
    }


       else if(initial > current) {
           
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

    result.textContent = message;
}
