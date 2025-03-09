let n = 6;  
let arr = [];  

if (n <= 0) {  
  if (n === 0) {  
    console.log("Mảng không có phần tử nào");  
  } else {  
    console.log("Số lượng phần tử không được nhỏ hơn 0");  
  }  
} else {   
  if (n === 6) {  
    arr = [2, 4, 6, 1, 8, 9];  
  }  

  if (arr.length < 2) {  
    console.log("Mảng không có số lớn thứ hai (cần ít nhất 2 phần tử)");  
  } else {  
    arr.sort(function(a, b) {  
      return b - a;  
    });  
    let secondLargest = arr[1];  
  
    if (secondLargest === arr[0]) {  
      let i = 1;  
      while (i < arr.length && arr[i] === arr[0]) {  
        i++;  
      }  
      if (i < arr.length) {  
        secondLargest = arr[i];  
      } else {  
        console.log("Không có số lớn thứ hai khác biệt");  
        secondLargest = null; 
      }  
    }  

    if (secondLargest !== null) {  
      console.log(secondLargest);  
    }  

  }  
}  