let nums1 =[0,1,0,13,0,12]
removeElement(nums1)
let nums2 =[1,13,12]
removeElement(nums2)
let nums3 =[0]
removeElement(nums3)

function removeElement(array) {
    if(array.includes(0)){
        let temparr =[];
        for (let i = 0; i < array.length; i++) {
            if(array[i]==0){
                array.splice(i,1);
                temparr.push(0)
            }    
        }
        array.splice(array.length,0,...temparr)
        console.log(array)
    }
    else{console.log(array)}
}


//Intersection of an arrays
let  nums4 = [1,2,2,1]
let  nums5 = [2,2]
let temparr=[]
for (let i = 0; i < nums4.length; i++) {
    
    for (let j = 0; j < nums5.length; j++) {
        if(nums4[i]==nums5[j]){
            if (!temparr.includes(nums5[j])) {
                temparr.push(nums5[j])
            }
        }
        
    }    
}
console.log(temparr)

//dublicates
let iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
let resultArray =[]

for (let i = 0; i <= iputArray.length-1; i++) {
    if(i==0){resultArray.push(iputArray[0]);}
    for (let j = i+1; j < iputArray.length; j++) {
        if(iputArray[i]!=iputArray[j]){
            if (!resultArray.includes(iputArray[j])) {
                    resultArray.push(iputArray[j]);
            }
        }
        
    }
    
    
}
console.log(resultArray)
