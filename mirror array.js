let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function mirror (array){
  for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}

mirror(arr)
-----
ver 2

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function mirror (array){
  let mirror_a = []
  for (let i = array.length - 1; i >= 0; i--){
    mirror_a.push(array[i]);
  }
  return mirror_a
}

console.log(mirror(arr))