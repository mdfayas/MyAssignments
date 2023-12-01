let s = "Hello World";
LastStringLength(s);
let s2 = "   fly me   to   the moon  ";
LastStringLength(s2);

function LastStringLength(statement) {
    let lsitOfString = statement.split(" ");
    let filteredarray = lsitOfString.filter(ele => ele!= '');
    let lastString = filteredarray[filteredarray.length-1];
    console.log("Length of last word in the String \"" + statement+  "\" is " + lastString.length);
    
}

console.log(isAnagram('listen','silent'));
console.log(isAnagram('hello','world'));

function isAnagram(string1 , string2) {
        let result = true;
        let firstString = string1.split("");
        let secondString = string2.split("");
        let length1 = firstString.length;
        let length2 = secondString.length;
        if (length1 == length2){
            firstString.sort();
            secondString.sort();
            for (let i = 0; i < firstString.length; i++) {
                if (firstString[i]!= secondString[i]) {
                    result = false;
                    break;
                }
                
            }

        }
        else {
            return false;
        }
        return result;

    
}