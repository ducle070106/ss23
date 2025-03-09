let n = 5;    
let arr = [];

if (n <= 0) {  
  if (n === 0) {  
    console.log("Mảng không có phần tử");  
  } else {  
    console.log("Số lượng phần tử không hợp lệ");  
  }  
} else {  
 
  if (n === 5) {  
    arr = [1, -2, 5, -1, -9];  
  } else if (n === 3) {  
    arr = [-1.1, 2.2, -2];  
  }  

  let count = 0;  
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] < 0 && Number.isInteger(arr[i])) {
      count++;  
    }  
  }  
  console.log(count);  
}  