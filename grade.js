function grade (person,marks) {
  if (marks <= 60){
  console.log(person +" gets F")
  }
  else if (marks <= 70){
  console.log(person +" gets D")
  }
  else if (marks <= 80){
  console.log(person +" gets C")
  }
  else if (marks <= 90){
  console.log(person +" gets B")
  }
  else {
  console.log(person +" gets A")
  }

}

grade ("David",80)
grade ("Vinoth",77)
grade ("Divya",88)
grade ("Ishitha",95)
grade ("Thomas",68)

function grade (score) {
  if (score <= 60) return "F";
  if (score <= 70) return "D";
  if (score <= 80) return "C";
  if (score <= 90) return "B";
  if (score <= 100) return "A";
}