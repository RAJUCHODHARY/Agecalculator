function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  function calculateButton() {
    const birthdateInput = document.getElementById('birthdate');
    const result = document.getElementById('result');
    const birthdate = birthdateInput.value;
    if (birthdate) {
      const age = calculateAge(birthdate);
      result.textContent = `Your age is ${age} years. `;
    } else {
      result.textContent = 'Please enter your birthdate.';
    }
  }
  
  const Btn = document.getElementById('calculate');
  Btn.addEventListener('click', calculateButton);