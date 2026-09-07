let totalMarks = 0;
let passed = 0;
let failed = 0;
//for loop to iterate through the marks of 10 students
for (let student= 1; student <= 10; student++) {

    let marks = Math.floor(Math.random() * 101);
    totalMarks += marks;
    if (marks >= 50) {
        passed++;
    } else {
        failed++;
    }
    console.log(`Student ${student} = ${marks}`);
}
console.log(`Total Marks: ${totalMarks}`);
let averageMarks = totalMarks / 10;
console.log(`Average Marks: ${averageMarks}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);