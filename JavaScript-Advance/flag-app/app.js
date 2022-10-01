//**======================================================
//* FLAG-APP
//*=======================================================


const fetchCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url).then((res) => {
        if (!res.ok) {
            renderError(`Something went wrong : ${res.status}`);
            throw new Error();
            // buraya throw blogu koysakda artık olur cünkü hatayı yazdırma islemini bi üstte yaptık 
        }
        return res.json();
    })
        .then((data) => renderCountries(data))
        .catch((err) => console.log(err));
};

const renderError = () => {
    const countryDiv = document.querySelector(".countries");
    countryDiv.innerHTML += `
    <h2>Countries can not fetched </h2>
    <img src="./img/404.png" alt="" />
    `;
};


//! Buraya kadar olan işlem;
// fetch yaptık sonra then ile yakalıyoruz sonra hata var diyelim hatayı yazdırıyor asagı blokda sayfadada renderError dediğimiz yerde hatayı yazdırıp h2 baslıgıyla resmi koyuyor kullanıcıya 

// Buradada cardı alıp bastıkcaz içine resimleri artık 👇


const renderCountries = (data) => {
    console.log(data);
    const countryDiv = document.querySelector(".countries");
    const { capital, currencies, flags: { svg }, languages, name: { common }, region } = data[0];


    console.log(Object.values(languages));
    console.log(Object.values(currencies)[0].name);
    console.log(Object.values(currencies)[0].symbol);



    // array içinde oldugu için dizi içinde tek elementi de olsa [0] ı dememiz lazım 
    // yukarıdaki

    // burada array için de kullanıldıgı için döngü kurmamıza gerek kalmadı 
    countryDiv.innerHTML += `
    <div class="card" style="width: 18rem;">
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
    <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)} ✍
    //! objeclerin içindeki tüm valuelari cağıracaksak bu sekilde yazıyoruz ✍
    </li>
    <li class="list-group-item">
    <i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(currencies)[0].name},
    ${Object.values(currencies)[0].symbol}
    </li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
}
fetchCountryByName("turkey");
fetchCountryByName("South Africa");
