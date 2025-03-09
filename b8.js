let n = 7;    
let arr = [0, 1, 1, 2, 3, 5, 8];  
if (n < 0) {  
  console.log("Số lượng phần tử không được nhỏ hơn 0");  
} else if (n === 0) {  
  console.log("Không phải dãy số Fibonacci"); 
} else if (n === 1) {  
  console.log("Là dãy số Fibonacci");
} else if (n === 2) {  
    if (arr[0] === 0 && arr[1] === 1) {  
      console.log("Là dãy số Fibonacci");  
    } else if (arr[0] === 1 && arr[1] === 1) {  
      console.log("Là dãy số Fibonacci");  
    }  
    else {  
      console.log("Không phải dãy số Fibonacci");  
    }  
}  
else {  
  let isFibonacci = true;  
  for (let i = 2; i < n; i++) {  
    if (arr[i] !== arr[i - 1] + arr[i - 2]) {  
      isFibonacci = false;  
      break;  
    }  
  }  

  if (isFibonacci) {  
    console.log("Là dãy số fibonacci");  
  } else {  
    console.log("Không phải dãy số fibonacci");  
  }  
}  