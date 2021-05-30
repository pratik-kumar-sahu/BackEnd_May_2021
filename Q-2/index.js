function getAge(DOB) {
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  var birthMonth = birthDate.getMonth();
  var birthDay = birthDate.getDay();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return `${age} years ${birthMonth + 1} months ${birthDay + 1} days`;
}

console.log(getAge("2002/05/30"));
