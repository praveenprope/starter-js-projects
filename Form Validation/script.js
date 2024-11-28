const userEmailAddress = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone');
const userPassword = document.querySelector('#password');
const sumbitButton = document.querySelector('.submit-btn');
const errorMessagePhone = document.querySelector('#phoneError');
const errorMessagePassword = document.querySelector('#passwordError')


sumbitButton.addEventListener('click',(event)=>{
    event.preventDefault()

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userEmail = userEmailAddress.value;
    const userPhone = phoneNumber.value;
    const password = userPassword.value;

    const newUser = {
        email: userEmail,
        phone: userPhone,
        password: password,
      };

      existingUsers.push(newUser);

    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


   if(!phoneRegex.test(userPhone)){
    errorMessagePhone.textContent = 'Write Valid Number';
    errorMessagePhone.style.display = 'flex';

   } else if (!passwordRegex.test(password)) {
       errorMessagePassword.textContent = 'Minimum eight characters, at least one letter, one number and one special character:';
       errorMessagePassword.style.display = 'flex';
   } else {
      
      localStorage.setItem('users', JSON.stringify(existingUsers));
      errorMessagePassword.textContent = "You Successfully Signed Up";
      errorMessagePassword.style.display = 'flex';
      errorMessagePassword.style.backgroundColor = "green"; 
      errorMessagePassword.style.color = "white";
   }
})