//Set Costing for the selected Items
function setCosting(id, price) {
    document.getElementById(id).innerText = price;
    calculation()
}
//get Costing for the selected Items
function getCosting(id){
    const productCost = parseInt(document.getElementById(id).innerText)
    return productCost;
}

//Total Calculation of all selected Items
function calculation(){
    const bestPrice = getCosting('bestPrice');
    const extraMemoryCost = getCosting('extraMemoryCost');
    const extraStorageCost = getCosting('extraStorageCost');
    const deliveryCharge = getCosting('deliveryCharge');
    const totalSubPrice = (bestPrice.innerText + extraMemoryCost.innerText + extraStorageCost.innerText + deliveryCharge.innerText);
    

    document.getElementById('totalPrice').innerText = totalSubPrice;
    document.getElementById('grandTotal').innerText = totalSubPrice;      
}
//Pomo Code Error alert.

function wrongPromo(){
    alert('You Have Entered an invalid Promo or Already Used.');
}

document.getElementById('extraMemory8').addEventListener('click', function () {
    setCosting('extraMemoryCost', 0);     
})

document.getElementById('extraMemory16').addEventListener('click', function () {
    setCosting('extraMemoryCost', 180); 
})

document.getElementById('ssdStorage256').addEventListener('click', function () {
    setCosting('extraStorageCost', 0);  
})

document.getElementById('ssdStorage512').addEventListener('click', function () {
    setCosting('extraStorageCost', 100);   
})

document.getElementById('ssdStorage1024').addEventListener('click', function () {
    setCosting('extraStorageCost', 180);    
})

document.getElementById('freeDelivery').addEventListener('click', function () {
    setCosting('deliveryCharge', 0);  
})

document.getElementById('expressDelivery').addEventListener('click', function () {
    setCosting('deliveryCharge', 20);    
})

document.getElementById('inputPromo').addEventListener('click', function(){
    const getInputPromo = document.getElementById('inputPromo').value;
    const currentTotalPrice = parseInt(document.getElementById('totalPrice').innerText);
    const currentGrandTotal = parseInt(document.getElementById('grandTotal').innerText);

    if ((getInputPromo == 'stevekaku') && (currentTotalPrice == currentGrandTotal)) {
        const totalPrice = parseInt(document.getElementById('grandTotal').innerText);
        const getPercentage = parseFloat((totalPrice * 20)/100);
        const grandTotal = (totalPrice - getPercentage);
        document.getElementById('grandTotal').innerText = grandTotal;
        document.getElementById('inputPromo').value = '';
    }
    else{
        wrongPromo();
        document.getElementById('inputPromo').value = '';
    }
});
