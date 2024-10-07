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

const date = new Date('2024-02-02 17:08:21');

date.setMonth(3);
console.log(date);
date.setMinutes(15);
console.log(date);
