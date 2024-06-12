  // U22978120

const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dateSelect = document.getElementById('date');
const registrationDetails = document.getElementById('registrationDetails');

// Prevent Default for from submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate all the fields
  if (nameInput.value === '' || emailInput.value === '' || dateSelect.value === '') {
    alert('Please fill out all fields!');
    return;
  }

  // coded for getting registration details
  const name = nameInput.value;
  const email = emailInput.value;
  const date = dateSelect.value;
  const preferences = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (const checkbox of checkboxes) {
    preferences.push(checkbox.value);
  }

  
