let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];


function arraysum (array){
  let sum = 0
  for (let i = 0; i < array.length; i++) {
  sum += array[i]
  }
  return sum
}

let sum_array = arraysum(arr_1) + arraysum(arr_2)

console.log(sum_array)