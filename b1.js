let arr = [1, 22, 12, 8, 7, 9];   

let count = 0;  
let numbersGreaterThanOrEqualTo10 = []; 

for (let i = 0; i < arr.length; i++) {  
  if (arr[i] >= 10) {  
    count++;  
    numbersGreaterThanOrEqualTo10.push(arr[i]);
  }  
}  

if (count === 0) {  
  console.log("Không có số nào lớn hơn hoặc bằng 10");  
} else {  
  console.log(numbersGreaterThanOrEqualTo10.join(' ')); 
}  