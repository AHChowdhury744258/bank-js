
/* step-1: add event to the user */
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the amount from deposit fild
    const depositFeild = document.getElementById('user-deposit');
    const newDepositAmountString = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step-3: get the current depoit total
    // for non-input(element other than input, textarea) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
// set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calcilate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    // step-7: clear the deposit feld
    depositFeild.value = ''
})