/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
3. also make sure to convert the input into a number by using parseFloat
4. get previous and calculate total withdraw amount
step-4-5: set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5 new balance total



7...clear the input fild
*/
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const withdrawFild = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawFild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

// step-5
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// stap-6
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;



// step-7
withdrawFild.value = '';

})