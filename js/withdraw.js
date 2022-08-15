document.getElementById('button-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const NewwithdrawAmountString = withdrawField.value;
    const NewwithdrawAmount = parseFloat(NewwithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;

    previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

    const currentwithdrawTotal = previouswithdrawTotal + NewwithdrawAmount;

    withdrawTotalElement.innerText = currentwithdrawTotal;


    // balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - NewwithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = '';
})