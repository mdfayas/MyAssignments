function checkNumberType(number) {
    if (number > 0) {
        return(number + " is greater than zero");
        
    } 
    else if(number < 0) 
    {
        return(number + " is less than zero");
    }
    else
    {
        return("Please enter number greater than or less than zero");
    }
}
let testResult1,testResult2,testResult3 = "";

testResult1 = checkNumberType(10);
console.log(testResult1);
testResult2 = checkNumberType(-1);
console.log(testResult2);
testResult3 = checkNumberType(0);
console.log(testResult3);
