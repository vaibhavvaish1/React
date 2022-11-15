'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(arr, neighbouring = ''){
  const nameOfCountry = neighbouring === 'neighbour' ? arr.name.common : arr.name;

  const html = `
    <article class="country ${neighbouring}">
    <img class="country__img" src=${arr.flag} />
    <div class="country__data">
      <h3 class="country__name">${nameOfCountry}</h3>
      <h4 class="country__region">${arr.region}</h4>
      <p class="country__row"><span>👫</span>${(+arr.population/100000).toFixed(1)} people</p>

      <p class="country__row"><span>💰</span>CUR</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;

}

// ///////////////////////////////////////
// const getCountryDataAndNeighbour = function(country){
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();
// console.log(request.responseText)
// request.addEventListener('load', function(){
//     console.log(this.responseText);
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     let arr = data[0];
//     renderCountry(arr);

//     [...arr] = arr.borders;
//     console.log(arr);
//     for(let item in arr){
//       console.log(arr[item]);
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${arr[item]}`)
//       request2.send();
//       request2.addEventListener('load',  function(){
//         const data1 = JSON.parse(this.responseText);
//         console.log(data1[0]);
//         renderCountry(data1[0], 'neighbour')
//       })

//     }
   
  
// })
// };
// // getCountryDataAndNeighbour('portugal');
// getCountryDataAndNeighbour('germany');


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();
// const request = fetch('https://restcountries.com/v2/name/portugal')
// console.log(request);
const getCountryData = function(country){
  fetch (`https://restcountries.com/v2/name/${country}`).then(
    response => response.json(), err => console.log(err))
    .then(data => {
      renderCountry(data[0])
      const neighbours = data[0].borders[0];
      if(!neighbours) return;

      fetch (`https://restcountries.com/v3.1/alpha/${neighbours}`).
      then(response => response.json()).
      then(data => renderCountry(data[0], 'neighbour'));
    }
    );
}


btn.addEventListener('click', function(){
  getCountryData('sbfj');
})
