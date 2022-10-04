'use strict';
// query selectors
const formEl = document.querySelector('.sub-form');
const allInputsEl = document.querySelectorAll('input');
const submitBtnEl = document.querySelector('.submit-btn');

/**
 * Summary. This function adds a "*" to the <span> of the labels whose input is required (required attr is present).
 */
const requiredInput = () => {
  allInputsEl.forEach((input) => {
    if (input.hasAttribute('required')) {
      const spanEl = input.previousElementSibling;
      spanEl.innerHTML += '*';
    }
  });
};

const formData = () => {
  const formData = {};
  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    allInputsEl.forEach((input) => {
      if (input.hasAttribute('required')) {
        // getting info from inputs with the required attr
        formData[input.name] = input.value;
      }
      // getting checked-radio-btn data. This part has no meaning at all, I just wanted to to it :)
      const checkedRadio = document.querySelector(
        "input[type='radio']:checked"
      );
      formData[checkedRadio.name] = checkedRadio.value;
    });
    console.log(formData);
    return formData;
  });
};

/**
 * Description. This function checks if the answer typed in by the user, in the validator input, is correct. If it is, the submit-btn is then clickable. If not, it'll stay disabled.
 */
const formValidator = () => {
  const validadorInput = document.querySelector('input[name="validador"]');
  const VALIDADOR_NUMERO = '15';

  // initially put the button to be disabled
  submitBtnEl.setAttribute('disabled', 'true');

  validadorInput.addEventListener('input', () => {
    validadorInput.value === VALIDADOR_NUMERO
      ? submitBtnEl.removeAttribute('disabled')
      : submitBtnEl.setAttribute('disabled', 'true');
  });
};

const init = () => {
  requiredInput();
  formValidator();
  formData();
};

init();
