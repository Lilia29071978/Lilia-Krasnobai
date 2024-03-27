const alert = document.querySelector('.alert');
// exercise 1
const button = document.querySelector('.btn-primary');
button.onclick = function () {
  const alertElements = document.querySelectorAll('.alert');
  if (alertElements.length > 0) {
    alertElements.forEach((alertElement) => {
      alertElement.classList.add('alert-primary');
      alertElement.textContent = 'A simple primary alert—check it out!'
    });
  }
};

// exercise 2
const button2 = document.querySelector('.btn-secondary');
button2.addEventListener('click', function () {
  const alertElements = document.querySelectorAll('.alert');
  if (alertElements.length > 0) {
    alertElements.forEach((alertElement) => {
      alertElement.classList.add('alert-primary');
      alertElement.textContent = 'A simple secondary alert—check it out!';
    });
  } 
});

// exercise 3

const button3 = document.querySelector('.btn-success');
button3.addEventListener('mouseover', function () {
  const alertElements = document.querySelectorAll('.alert');
  alertElements.forEach((alertElement) => {
    alertElement.classList.add('alert-success');
    alertElement.textContent = 'A simple success alert—check it out!';
  });
});

button3.addEventListener('mouseout', function () {
  const alertElements = document.querySelectorAll('.alert');
  alertElements.forEach((alertElement) => {
    alertElement.classList.remove('alert-success');
    alertElement.textContent = '';
  });
});

// exercise 4
const button4 = document.querySelector('.btn-danger');
button4.addEventListener('focus', function () {
  const alertElements = document.querySelectorAll('.alert');
  alertElements.forEach((alertElement) => {
    alertElement.classList.add('alert-danger');
    alertElement.textContent = 'A simple danger alert—check it out!';
  });
});

button4.addEventListener('focusout', function () {
  const alertElements = document.querySelectorAll('.alert');
  alertElements.forEach((alertElement) => {
    alertElement.classList.remove('alert-danger');
    alertElement.textContent = '';
  });
});

// exercise 5

function toggleMode() {
    document.body.classList.toggle('dark-mode');
  
    const darkButton = document.querySelector('.btn-dark');
    const lightButton = document.querySelector('.btn-light');
  
    const isDarkMode = document.body.classList.contains('dark-mode');
  
    if (isDarkMode) {
      darkButton.style.display = 'none';
      lightButton.style.display = 'block';
    } else {
      darkButton.style.display = 'block';
      lightButton.style.display = 'none';
    }
  }
  
  const darkButtons = document.querySelectorAll('.btn-dark');
  const lightButtons = document.querySelectorAll('.btn-light');
  
  darkButtons.forEach((button) => {
    button.addEventListener('click', toggleMode);
  });
  
  lightButtons.forEach((button) => {
    button.addEventListener('click', toggleMode);
  });

// exercise 6
const buttonInfo = document.querySelector('.btn-info');
buttonInfo.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {  
    event.preventDefault();
    const alertElement = document.querySelector('.alert');
    alertElement.classList.add('alert-info');
    alertElement.textContent = 'A simple info alert—check it out!';
  }
});

// exercise 7
const card = document.querySelectorAll('.card');
for (let i = 0; i < card.length; i++) {
  const cardTitle = card[i].querySelector('.card-title');
  console.log(cardTitle.textContent);
}

// exercise 8
for (let i = 0; i < card.length; i++) {
    const addToCartButton = card[i].querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', function () {
      const cardTitle = card[i].querySelector('.card-title');
      console.log(cardTitle.textContent);
    });
}
