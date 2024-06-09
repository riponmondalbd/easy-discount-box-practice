document.getElementById('btn-apply').addEventListener('click', function () {
    const priceField = document.getElementById('input-field');
    const newPriceFieldString = priceField.value;
    const newPriceField = parseFloat(newPriceFieldString);
    const payField = document.getElementById('pay-field');

    if (isNaN(newPriceField)) {
        alert('Please provide a number');
        return;
    }
    else {
        const discount = newPriceField - (newPriceField * 0.3);
        payField.innerText = discount;
    }


    // clear input field value
    priceField.value = '';
})