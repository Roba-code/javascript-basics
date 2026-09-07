const customerName = "Robert"
const calculateUnits = (previousReading, currentReading) => {
    if  (previousReading < 0 || currentReading < 0) {
        return "Units cannot be negative";
    }else if (currentReading < previousReading) {
        return "Previous reading cannot be greater than current reading";
    }
    return currentReading - previousReading;
};
const consumedUnits = calculateUnits(100, 150);
const calculateElectricCharge = (consumedUnits) => {
    if (consumedUnits === "Units cannot be negative" || consumedUnits === "Previous reading cannot be greater than current reading") {
        return "invalid units";
    }
    if ( consumedUnits <= 50) {
        const rate =10;
        return consumedUnits * rate;
    }else if(consumedUnits > 50 && consumedUnits <= 150) {
        const rate =15;
        return 50 * 10+ (consumedUnits - 50) * rate;
    }else if(consumedUnits > 150) {
        const rate =20;
        return 50 * 10 + 100 * 15 + (consumedUnits - 150) * rate;
    }   

};
const electricCharge = calculateElectricCharge(consumedUnits);
const fixedServiceCharge = 500;
const calculateTotalBill = (electricCharge, fixedServiceCharge) => {
    if (electricCharge === "invalid units") {
        return "invalid bill";
    }
    return electricCharge + fixedServiceCharge;
};
const totalBill = calculateTotalBill(electricCharge, fixedServiceCharge);
const calculateUsageCategory = (totalBill) => {
    if (totalBill === "invalid bill") {
        return "invalid usage category";
    }else if (totalBill >=5000) {
        return "High Usage";
    }
     return "Normal Usage";
};
const usageCategory = calculateUsageCategory(totalBill);
console.log(`Customer Name: ${customerName}`);
console.log(`Consumed Units: ${consumedUnits}`);
console.log(`Electric Charge: ${electricCharge}`);  
console.log(`Total Bill: ${totalBill}`);
console.log(`Usage Category: ${usageCategory}`);
