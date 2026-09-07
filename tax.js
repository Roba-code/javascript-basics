const calculateTotal = function (price, tax){
    return price +tax;
};
const calculateFinalTotal = function (price, tax) {
    return calculateTotal(price, tax) * 2;
};
const finalTotal = calculateFinalTotal(1000, 150);
console.log(finalTotal);
