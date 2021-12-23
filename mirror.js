function solution(str){
  let mirror = ""
  for (let i = str.length-1; i >= 0; i--) {
    mirror += str[i] 
  }
  return mirror
}

solution("world")