document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const errorMessages = document.getElementById('errorMessages');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      errorMessages.innerHTML = '';
  
      const username = form.elements.username.value.trim();
      const email = form.elements.email.value.trim();
      const password = form.elements.password.value.trim();
  
      if (username === '') {
        displayErrorMessage("Потрібно ввести ім'я користувача");
      }
  
      if (email === '') {
        displayErrorMessage('Необхідно вказати адресу електронної пошти');
      } else if (!isValidEmail(email)) {
        displayErrorMessage('Електронна адреса недійсна');
      }
  
      if (password === '') {
        displayErrorMessage('Необхідно ввести пароль');
      } else if (password.length < 8) {
        displayErrorMessage('Пароль має бути не менше 8 символів');
      } else if (!isValidPassword(password)) {
        displayErrorMessage(
          'Пароль повинен містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ'
        );
      }
  
      if (errorMessages.innerHTML === '') {
        form.submit();
      }
    });
  
    function displayErrorMessage(message) {
      const p = document.createElement('p');
      p.textContent = message;
      errorMessages.appendChild(p);
    }
  
    function isValidEmail(email) {
      return email.includes('@');
    }
  
    function isValidPassword(password) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
  });