const loginButton = document.getElementById("login-btn");
loginButton.addEventListener('click', function(){
  const loginArea = document.getElementById("log-in-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById('transaction-area');
  transactionArea.style.display = "block"
});


//This code is deposit code
const addDeposit = document.getElementById("depositButton");
    addDeposit.addEventListener("click", function(){
      const depositNumber = getInput("deposit-amount");

      //this code is the function of deposit
//     const depositAmount = document.getElementById("deposit-amount").value;
//      depositNumber = parseFloat(depositAmount);

  
updateAmount("currentDeposit", depositNumber);
updateAmount("currentBalance", depositNumber);

  

// ei code gula theke function ta asche
// const currentBalance = document.getElementById("currentBalance").innerText;
// const currentBalanceNumber = parseFloat(currentBalance);
// const currentNewBalance = depositNumber + currentBalanceNumber;

// document.getElementById("currentBalance").innerText = currentNewBalance;

     document.getElementById("deposit-amount").value = "";
})

// this code is withdraw
const withdrawBtn = document.getElementById("withdrawButton");
withdrawBtn.addEventListener("click", function(){
 
     const withdrawNumber = getInput("withdrawAmount");
     updateAmount("currentWithdraw", withdrawNumber);
     updateAmount("currentBalance", -1* withdrawNumber);

     document.getElementById("withdrawAmount").value = ""



})

function getInput(id){

     const amount = document.getElementById(id).value;
     const amountNumber = parseFloat(amount);
     return amountNumber
     }
     

     function updateAmount(id, depositNumber){
          const currentAmount =   document.getElementById(id).innerText;
          const currentNumber = parseFloat(currentAmount);
          const totalNumber = currentNumber + depositNumber;
         
          document.getElementById(id).innerText = totalNumber;
  
       }

// 

     //  
// this code is 2 time use thats i called a function
// const withdrawBalance = document.getElementById("withdrawAmount").value;
// const withdrawNumber = parseFloat(withdrawBalance);



//const withdrawAmount = document.getElementById("withdrawAmount").value; 
//    const withdrawNumber = parseFloat(withdrawAmount);
