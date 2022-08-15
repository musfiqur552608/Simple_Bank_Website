document.getElementById('button-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const NewwithdrawAmountString = withdrawField.value;
    const NewwithdrawAmount = parseFloat(NewwithdrawAmountString);
    withdrawField.value = '';
    if(isNaN(NewwithdrawAmount)){
        alert('Enter a valid amount!!!');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;

    previouswithdrawTotal = parseFloat(previouswithdrawTotalString);




    // balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (NewwithdrawAmount > previousBalanceTotal) {
        alert('Baaper bank e eto taka nai')
        return;
    }
    const currentwithdrawTotal = previouswithdrawTotal + NewwithdrawAmount;

    withdrawTotalElement.innerText = currentwithdrawTotal;
    const currentBalanceTotal = previousBalanceTotal - NewwithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    
})