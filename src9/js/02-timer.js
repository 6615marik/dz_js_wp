// // Описан в документации
// import flatpickr from 'flatpickr';
// // Дополнительный импорт стилей
// // import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix-3.2.5.min.css';
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  const stringValue = String(value).padStart(2, '0');
  return stringValue;
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      start.disabled = true;
      Notiflix.Notify.warning('Memento te hominem esse');
    } else {
      start.disabled = false;

      start.addEventListener('click', countdownTime);
    }
  },
};
let time = null;
function countdownTime() {
  time = setInterval(() => {
    start.disabled = true;

    const dateChoosenMs = new Date(input.value).getTime();
    const now = new Date().getTime();
    const timeCheck = dateChoosenMs - now;

    const { days, hours, minutes, seconds } = convertMs(timeCheck);

    day.innerHTML = days < 10 ? addLeadingZero(days) : days;
    hour.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
    min.innerHTML = minutes < 10 ? addLeadingZero(minutes) : minutes;
    sec.innerHTML = seconds < 10 ? addLeadingZero(seconds) : seconds;

    if (timeCheck < 1000) {
      clearInterval(time);
      start.disabled = false;
    }
  }, 1000);
}
const start = document.querySelector('button[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');
const input = document.querySelector('input#datetime-picker');
flatpickr(input, options);
