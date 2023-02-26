//*=========================================================
//*                     FLAG-APP
//*=========================================================

// const fetchCountryByName = (name) => {
//   const url = `https://restcountries.com/v3.1/name/${name}`;
//   //!👆 Burada ki name de her seferınde fonk ne ile cagırırsam o gelecek onun yerine
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         renderError(`Something went wrong: ${res.status}`);
//         throw new Error();
//       }
//       return res.json();
//     })
//     .then((data) => renderCountries(data))
//     .catch((err) => console.log(err));
// };

// const renderError = () => {
//   const countryDiv = document.querySelector(".countries");
//   countryDiv.innerHTML += `
//     <h2>Countries can not fetched</h2>
//     <img src="./img/404.png" alt="" />
//   `;
// };

// const renderCountries = (data) => {
//   // console.log(data);


//   const countryDiv = document.querySelector(".countries");
//   const {
//     capital,
//     currencies,
//     flags: { svg },
//     // 👆flagsın içindeki svg yı bana çıkar 
//     languages,
//     name: { common },
//     // 👆namein içindeki commonu bana cıkar 
//     region,
//   } = data[0];
//   //!DİKKAT✨ Dizi içindeki objenın objelerine baktıgımız için bu sekilde detr yaptık 

//   console.log(Object.values(languages));
//   console.log(Object.values(currencies)[0].name);
//   console.log(Object.values(currencies)[0].symbol);
//   //! 👆 objectlerin içinde objectlere ulaşmak için bu sekilde yaptık 

//   countryDiv.innerHTML += `
//     <div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">
//       <img src="${svg}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${common}</h5>
//         <p class="card-text">${region}</p>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">
//           <i class="fas fa-lg fa-landmark"></i> ${capital}
//         </li>
//         <li class="list-group-item">
//           <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}
//         </li>
//         <li class="list-group-item">
//           <i class="fas fa-lg fa-money-bill-wave"></i>
//           ${Object.values(currencies).map((item) => Object.values(item) + " ")}
//        </li>
//       </ul>
//       <div class="card-body">
//         <a href="#" class="card-link">Card link</a>
//         <a href="#" class="card-link">Another link</a>
//       </div>
//     </div>


//   `;
// };

// fetchCountryByName("turkey");
// fetchCountryByName("western sahara");
// fetchCountryByName("south africa");

//**** */ Burası butun ulkeleri almak için yapılan kısım 👇
let countrys = [];

const fetchCountryAll = () => {
  const url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderCountries(data));
};

const countryList = document.querySelector(".countryList");
const renderCountries = (data) => {
  console.log(data);

  // ülke isimlerini alfabatik olarak sıralamak için;
  let names = data.map((data) => data.name.common).sort();
  // console.log(names);
  names.forEach((item) => {
    countryList.innerHTML += `<option class="sm-fs-6" value="${item}">${item}</option>`;
  });

  // sıralamadan direk almak için
  //   data.forEach(item => {
  //  ;
  //     countryList.innerHTML += `<option value="${item.name.common}">${item.name.common}</option>`;
  //   });

  countrys = data;
  // console.log(countrys);
};

fetchCountryAll();

countryList.addEventListener("change", () => {
  infoCountries(countryList.value);
});

const infoCountries = (cName) => {
  console.log(cName);
  let info = countrys.filter((item) => item.name.common == cName);
  console.log(info);

  const countryDiv = document.querySelector(".countries");
  const {
    capital,
    currencies,
    flags: { svg },
    languages,
    name: { common },
    region,
    maps: { googleMaps },
  } = info[0];

  console.log(typeof common);
  console.log(typeof capital);
  console.log(Object.values(languages));
  console.log(Object.values(currencies)[0].name);
  console.log(Object.values(currencies)[0].symbol);

  countryDiv.innerHTML = `
    <div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">
      <img src="${svg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${common}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="fas fa-lg fa-landmark"></i> ${capital}
        </li>
        <li class="list-group-item">
          <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}
        </li>
        <li class="list-group-item">
          <i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(currencies)[0].name
    },
          ${Object.values(currencies)[0].symbol},
        </li>
      </ul>
      <div class="card-body text-center">
        <a href="${googleMaps}" class="card-link">Google Maps</a>
      </div>
    </div>  `;
};