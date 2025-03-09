let arr1 = ["", false, 0, 5, 10, "Hello world!"];  
let arr2 = ["", false, 0, undefined, null];  
let arr3 = [NaN, "test", 4];  
let arr4 = ["JavaScript", 0, null, true, 7, " "];  

let result1 = [];  
for (let i = 0; i < arr1.length; i++) {  
  if (arr1[i]) {  
    result1.push(arr1[i]);  
  }  
}  

let result2 = [];  
for (let i = 0; i < arr2.length; i++) {  
  if (arr2[i]) {  
    result2.push(arr2[i]);  
  }  
}  

let result3 = [];  
for (let i = 0; i < arr3.length; i++) {  
  if (arr3[i]) {  
    result3.push(arr3[i]);  
  }  
}  

let result4 = [];  
for (let i = 0; i < arr4.length; i++) {  
  if (arr4[i]) {  
    result4.push(arr4[i]);  
  }  
}  


console.log(result1);  
console.log(result2);  
console.log(result3);  
console.log(result4);  