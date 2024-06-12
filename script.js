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

  
// Create registration details element
  const details = document.createElement('div');
  details.innerHTML = `
    <h3>Registration Details</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${date}</p>
    <p>Preferences: ${preferences.join(', ')}</p>
  `;

  // Clear form after successful submission (optional)
  form.reset();

  // Display registration details
  registrationDetails.innerHTML = '';
  registrationDetails.appendChild(details);
});
