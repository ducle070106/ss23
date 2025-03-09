let n = 5;  
let arr = [];  

if (n <= 0) {  
  if (n === 0) {  
    console.log("Mảng không có phần tử");  
  } else {  
    console.log("Số lượng phần tử không được âm");  
  }  
} else {  
  
  if (n === 5) {  
    arr = ['a', '-2', 'd', '5', 'e'];  
  } else if (n === 3) {  
    arr = ['a', 'c', 'd'];  
  }  

  let sum = 0;  
  let hasNumber = false; 

  for (let i = 0; i < arr.length; i++) {  
    if (!isNaN(arr[i]) && isFinite(arr[i])) {  
      sum += parseInt(arr[i]); 
      hasNumber = true;  
    }  
  }  

  if (!hasNumber) {  
    console.log("Không có phần tử nào là số");  
  } else {  
    console.log(sum);  
  }  
}  