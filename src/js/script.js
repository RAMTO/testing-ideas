const form = document.querySelector('#cta-form');

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
  const email = form.querySelector('#mce-EMAIL');
  const value = email.value.trim();

  if (validateEmail(value)) {
    email.classList.remove('is-invalid');
  } else {
    e.preventDefault();
    email.classList.add('is-invalid');
  }
});
