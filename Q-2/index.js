function getAge(DOB) {
  const today = new Date();
  const birthDate = new Date(DOB);
  const age = today.getFullYear() - birthDate.getFullYear();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds()
  const m = today.getMonth() - birthDate.getMonth();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDay();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return `${age} years ${birthMonth + 1} months ${birthDay + 1} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

console.log(getAge("2002/05/31"));
