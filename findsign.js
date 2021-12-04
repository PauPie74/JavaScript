function findsign(n1,n2,n3) {
  let sum = n1 * n2 * n3
  if (sum > 0) {
  alert("The sign is +");
  }
  if (sum < 0) {
  alert("The sign is -");
  }
}

findsign(3,-7,2)