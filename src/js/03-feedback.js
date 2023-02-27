import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');
form.addEventListener('input', throttle(onInputForm, 1000));

function onInputForm(e) {
  //   console.log(e.target.value);
  const valueForm = {
    Email: input.value,
    Message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
}
form.addEventListener('submit', onSubmitForm);

function ubdate() {
  let local = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(local);
  if (local !== null) {
    input.value = local.Email;
    textarea.textContent = local.Message;
  }
}
ubdate();

function onSubmitForm(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
