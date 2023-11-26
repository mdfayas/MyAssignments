function calculateGrade(mark) {
    switch (true) {
        case mark >= 90 && mark <= 100:
            console.log("A grade");
            break;
        case mark >= 70 && mark <90:
            console.log("B grade");
            break;
        case mark >= 35 && mark <70:
            console.log("C grade");
            break;
        case mark >= 0 && mark <35:
            console.log("FAIL");
            break;
        default:
            console.log(mark + " is not valid.Please enter marks between 0 to 100");
            break;
    }
}
let student1 = 95;
calculateGrade(student1);
let student2 = 70;
calculateGrade(student2);
let student3 = 100;
calculateGrade(student3);
let student4 = 35;
calculateGrade(student4);
let student5 = 34;
calculateGrade(student5);
let student6 = 0;
calculateGrade(student6);
let student7 = 101;
calculateGrade(student7);