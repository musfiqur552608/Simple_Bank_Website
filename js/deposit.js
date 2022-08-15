document.getElementById('button-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const NewdepositAmountString = depositField.value;
    const NewdepositAmount = parseFloat(NewdepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + NewdepositAmount;

    depositTotalElement.innerText = currentDepositTotal;


    // balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + NewdepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})