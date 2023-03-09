const form = document.querySelector('form');
const deleyV = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onSmtForm);
function onSmtForm(e) {
  e.preventDefault();
  let deley = +deleyV.value;
  let stepV = +step.value;
  let amountV = +amount.value;
  // console.log(deleyV, stepV, amountV);
  for (let i = 0; i < amountV; i++) {
    createPromise(i, deley)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    deley += stepV;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
