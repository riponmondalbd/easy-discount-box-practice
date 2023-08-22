document.getElementById('btn-apply').addEventListener('click', function () {
    const balanceText = document.getElementById('balance-input');
    const previousBalanceString = balanceText.value;
    const previousBalance = parseFloat(previousBalanceString);

    // discount calculation
    const discount = previousBalance - (previousBalance * 0.3);

    // set value for output
    const outputValue = document.getElementById('output-value');
    const previousOutputString = outputValue.innerText;
    const previousOutput = parseFloat.previousOutputString;

    outputValue.innerText = discount;
})