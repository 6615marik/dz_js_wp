const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
let int = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(start, stop);
start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);
function onStart() {
  int = setInterval(() => {
    console.log('dfdg');
    start.disabled = true;
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onStop() {
  clearInterval(int);
  start.disabled = false;
}
