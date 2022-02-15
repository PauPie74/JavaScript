// Return an array which contains these numbers, but:
// a. multiplied by 5.6
// b. turned into their square roots
// c. every second item should be negative
// d. filter out all items bigger then 10 and smaller than -10

let inp_numbers = [1,3,4,6,10,45];

const new_num = inp_numbers.map(x => Math.sqrt(x * 5.6)).map((x, i) => i%2 === 0 ? x : -x).filter(x => x <= 10 && x >= -10);;

console.log(new_num)
