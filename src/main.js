// const formRef = document.querySelector('.js-form');
// const listRef = document.querySelector('.js-list');

// formRef.addEventListener('submit', onSubmit);

// function onSubmit(ev) {
//   ev.preventDefault();
//   const {
//     query: { value: query },
//     days: { value: days },
//   } = ev.currentTarget.elements;

//   if (!query) {
//     return alert('State location, please');
//   }

//   weatherApi(query, days).then(
//     data => (listRef.innerHTML = markup(data.forecast.forecastday))
//   );
// }

// function weatherApi(query = 'Lviv', days = 3) {
//   const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
//   const API_KEY = 'b6bbf5ee5b904a2bb6374500242309';
//   return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&days=${days}`).then(
//     resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     }
//   );
// }

// function markup(arr) {
//   return arr
//     .map(
//       ({
//         day: {
//           condition: { icon, text },
//           maxtemp_c,
//         },
//         date,
//       }) =>
//         `<li>
//           <img src="${icon}" alt="${text}" />
//           <h2>${text}</h2>
//           <h2>Дата: ${date}</h2>
//           <h2>Макс. температура, С: ${maxtemp_c}</h2>
//         </li>`
//     )
//     .join('');
// }
// ===================================================

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// let userSelectedDate;
// let currentTime;

// const inputRef = document.querySelector('#datetime-picker');
// const startRef = document.querySelector('[data-start]');
// const daysRef = document.querySelector('[data-days]');
// const hoursRef = document.querySelector('[data-hours]');
// const minsRef = document.querySelector('[data-minutes]');
// const secsRef = document.querySelector('[data-seconds]');

// startRef.setAttribute('disabled', true);
// startRef.addEventListener('click', onStart);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const startTime = Date.now();
//     userSelectedDate = selectedDates[0];

//     if (startTime > userSelectedDate) {
//       startRef.setAttribute('disabled', true);
//       iziToast.error({
//         message: `Please choose a date in the future`,
//         position: 'bottomLeft',
//       });
//     }

//     if (startTime < userSelectedDate) {
//       startRef.removeAttribute('disabled');
//     }

//     currentTime = new Date(userSelectedDate);
//   },
// };

// flatpickr(inputRef, options);

// function onStart() {
//   inputRef.setAttribute('disabled', true);
//   const timerId = setInterval(() => {
//     const goTime = Date.now();
//     const time = currentTime - goTime;
//     const faceTime = convertMs(time);

//     daysRef.textContent = faceTime.days;
//     hoursRef.textContent = faceTime.hours;
//     minsRef.textContent = faceTime.minutes;
//     secsRef.textContent = faceTime.seconds;

//     if (time < 1000) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const formRef = document.querySelector('.form');

// formRef.addEventListener('submit', onSubmit);

// function onSubmit(ev) {
//   ev.preventDefault();
//   const input = ev.currentTarget.elements;
//   let delay = Number(input.delay.value);
//   let state = input.state.value;
//   createPromise(delay)
//     .then(() => {
//       iziToast.success({
//         message: `✅ Fulfilled promise in ${delay}ms`,
//         position: 'bottomLeft',
//       });
//     })
//     .catch(() => {
//       iziToast.error({
//         message: `❌ Rejected promise in ${delay} ms`,
//         position: 'bottomLeft',
//       });
//     });
//   formRef.reset();

//   function createPromise() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         if (state === 'fulfilled') {
//           res();
//         } else {
//           rej();
//         }
//       }, delay);
//     });
//   }
// }
