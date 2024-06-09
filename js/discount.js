document.getElementById('btn-apply').addEventListener('click', function () {
    const priceField = document.getElementById('input-field');
    const newPriceFieldString = priceField.value;
    const newPriceField = parseFloat(newPriceFieldString);

    const discount = newPriceField - (newPriceField * 0.3);

    const payField = document.getElementById('pay-field');
    payField.innerText = discount;
})