const submit = document.querySelector('.submit');
const email = document.getElementById('email');
const error = document.querySelector('.error');
const iconError = document.querySelector('.icon-error');
let itsOk;

function check(emailValue) {
  if (emailValue == '') {
    error.style.display = 'flex';
    iconError.style.opacity = '1';
    email.classList.add('input-error');
    itsOk = false;
  } else {
    error.style.display = 'none';
    iconError.style.opacity = '0';
    email.classList.remove('input-error');
  }
}

submit.addEventListener('click', () => {
  let emailValue = email.value;
  check(emailValue);
  for (i = 0; i < emailValue.length; i++) {
    if (emailValue[i] === '@') {
      itsOk = true;
      break;
    } else {
      itsOk = false;
    } 
  }
  if (itsOk) {
    alert('El correo ha sido registrado, Gracias!');
    email.value = '';
  } else {
    error.style.display = 'flex';
    iconError.style.opacity = '1';
    email.classList.add('input-error');
  }
  
});

