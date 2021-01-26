const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function(){

    const loginArea = document.getElementById("log-in-area")
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display = "block";
})

const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", function(){

   const getAmountNumber = getInput("deposit-amount")
//    const depositAmount= document.getElementById("deposit-amount").value;
//    const getAmountNumber = parseFloat(depositAmount);

//   const currentDeposit =  document.getElementById("currentDeposit").innerText;
//   const currentDepositNumber = parseFloat(currentDeposit);
//   const addDeposit= currentDepositNumber + depositNumber
//  document.getElementById("currentDeposit").innerText = addDeposit;


  sumAmount("currentDeposit", getAmountNumber);
  sumAmount("currentBalance", getAmountNumber);

  document.getElementById('deposit-amount').value = "";
})



const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click", function(){

    const getAmountNumber = getInput("withdrawAmount");
    sumAmount("currentWithdraw", getAmountNumber);
    sumAmount("currentBalance", -1* getAmountNumber);
    
    document.getElementById('withdrawAmount').value = "";

})




function getInput(id){
    const amount= document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber
 
}

function sumAmount(id, getAmountNumber){

    const current =  document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const addDeposit= currentNumber + getAmountNumber
   document.getElementById(id).innerText = addDeposit;

}

