const name = "ROBERT";
const calculateTotal = (math, science, english, chemistry, physics) => {
    if (math < 0 || math > 100 ||
        science < 0 || science > 100 ||
        english < 0 || english > 100 ||
        chemistry < 0 || chemistry > 100 ||
        physics < 0 || physics > 100) {
        return "Invalid marks";
    }
    return math + science + english + chemistry + physics;
    
};
const average = (math, science, english, chemistry, physics) => {
    const total = calculateTotal(math, science, english, chemistry, physics);
    if ( total)
    return total / 5;
};

const calculateGrade = (average) => {
    
    if (average >= 80) {
        return 'A';
    }
    if (average >= 70) {
        return 'B';
    }
    if (average >= 60) {
        return 'C';
    }   
    if (average >= 50) {
        return 'D';
    }
    return 'F'; 
};
const isPassed = (average) => {
    if (average >= 50) {
        return 'passed';
    }
    return 'failed';
};
const total = calculateTotal(70, 80, 90, 85, 75);
const avg = average(70, 80, 90, 85, 75);
const grade = calculateGrade(avg);
const passStatus = isPassed(avg); 
console.log(`Name: ${name}`);
console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${avg}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${passStatus}`);