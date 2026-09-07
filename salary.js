const calculateSalary = function (salary, bonus) {
    if (salary < 0 || bonus < 0) {
        return 0;
    } else {
        return salary + bonus;
    }  
};
const totalSalary = calculateSalary(50000, 5000);
console.log(totalSalary);
