const loginMail = document.querySelector('#loginEmail');
const loginPass = document.querySelector('#loginPassword');
const loginSumbit = document.querySelector('.submit-btn');

loginSumbit.addEventListener('click', (e) => {
    e.preventDefault()
  const localData = localStorage.getItem('users'); // Retrieve stored users
  const users = localData ? JSON.parse(localData) : []; // Parse or initialize empty array

  const enteredEmail = loginMail.value.trim(); // Get and trim entered email
  const enteredPassword = loginPass.value.trim(); // Get and trim entered password

  if (users.length === 0) {
    alert('No registered users found. Please sign up first.');
    return;
  }

  // Find if any user matches the entered credentials
  const matchedUser = users.find(
    (user) => user.email === enteredEmail && user.password === enteredPassword
  );

  if (matchedUser) {
    alert(`Login successful! Welcome, ${matchedUser.email}.`);
    location.href="I love You/index.html"
  } else {
    alert('Invalid email or password. Please try again.');
  }
});
