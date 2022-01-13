let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];

function sum_pairs(array1, array2) {
  let sum_array = []; 
  for (let i = 0; i < array1.length; i++) {
    sum_array.push(array1[i] + array2[i])
  }
  return sum_array
}

console.log(sum_pairs(arr_3, arr_4))