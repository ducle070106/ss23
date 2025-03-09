let n = 4;  

let arr = [];  

if (n <= 0) {  
  console.log("Không có ký tự số");  
} else {   
  if (n === 4) {  
    arr = ['c', '2', 'd', '3'];  
  }  

  let numbers = [];
  for (let i = 0; i < arr.length; i++) {  
    if (!isNaN(arr[i]) && isFinite(arr[i])) {
      numbers.push(arr[i]);  
    }  
  }  

  if (numbers.length === 0) {  
    console.log("Không có ký tự số");  
  } else {  
    console.log(numbers.join(' ')); 
  }  
}  