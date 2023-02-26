// const getNews = async function () {
//     const API_KEY = "780d2289b4ee4b5696e1cd0d3cec9148";


//     const url =
//         "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

//     const res = await fetch(url);
//     // ! 👆Burada isteği gönderiyoruz.
//     // console.log(res);
//     const data = await res.json();
//     // ! 👆responsun  içindek verileri alıyoruz.
//     console.log(data.articles);
// };

// getNews();
// // //!👆 Buradada fonnk cagırıyorum.

// // //** */ Buraya kadar yaptıgım işlemde verilerim i cagırmış oluyorum sadece ekrana yansımamış oluyor.

//! arrow functıon ile yaptıgım 👇

// const getNews = async () => {
//     const API_KEY = "780d2289b4ee4b5696e1cd0d3cec9148";
//     const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;
//     const res = await fetch(url);
//     // console.log(res);
//     const data = await res.json();
//     console.log(data.articles);
// };
// getNews();



//? getNews adında bir fonksyon yazdık. Şimdi bu fonksiyonu cagırıcaz Ama öncesinde fonksiyonumuzu tanımlıcaz
//? API keysin şifresini oraya apı_key diye yazdık
//? url isminde baskaakı htppsini yazdık sonra yukarıdaki apı_key ile birleştirdik
//? Bunları bu sekilde yapmamızın sebebi ilerisi için daha kolayımıza gelecek
//? daha sonra verilerimizi url mizi cektik res ile tanıttık sonra json formatına getirdik daha sonra da cagordık
//? articles demezsek ayrıntılı göstermiyor o yüzden liste seklinde geliyor o yüzden articles dan oldugun belirttik

//* Burada Fonksiyonları ekrana bastırdık ve hata alırsak onu ayarladık 👇🏻

const getNews = async function () {
    const API_KEY = "780d2289b4ee4b5696e1cd0d3cec9148";
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;


    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status}`);
        }
        const data = await res.json();
        renderNews(data.articles);
        // ! 👆Burada DOM üzerine işlem yapacagımız için böğle dedik
    } catch (error) {
        console.log(error);
    }

};

//
// const renderNews = (news) => {
// const newsList = document.getElementById("news-list");
//
// news.forEach((item) => {
// const { title, description, urlToImage, url } = item; //! dest
// newsList.innerHTML += `
// <div class="card" style="width: 18rem;">
//   <img src="${urlToImage}" class="card-img-top" alt="...">
//   <div class="card-body">
// <h5 class="card-title">${title}</h5>
// <p class="card-text">${description}</p>
// <a href="${url}" class="btn btn-primary">Details</a>
//   </div>
// </div>`;
// });
//
// };
//
// window.addEventListener("load", getNews);
// buradaki window ile baslaynı getNews(); yerine yazıyoruz.
// Bu demek oluyor ki yükleme olduktan sonra getNevs methodunu cagır demek oluyor.
// Buraya kadar ☝🏻

///******Burada amacım ekrana DOM a hata bastırmak 👇 */
// let isError = false;
// //!  Burada ki let dı dısatrıda tanımladım cünkü genel sayfanın her bir yerinde hata verirse diye ayarlayacak
// const getNews = async function () {
//     const API_KEY = "78eaa41a147841fba735c16ad17f4b61";
//     const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=";

//     try {
//         const res = await fetch(url);
//         // Burada yukarıdaki url leri çağırdım, res'a attım
//         if (!res.ok) {
//             isError = true;
//             // bUrada False olunca hata vereceginden bu kısma gir burada hata verdirsin dite isError = true dedik
//             // throw new erroru burada calıstırmıyoruz çünkü burada calıstırırsak direk hata verdiriyor sayfaya yani doma resimi hatayı bastırmıyor
//             // eger true olmasadyı false olsaydı catch blogu calısacaktı
//         }
//         const data = await res.json();
//         renderNews(data.articles);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const renderNews = (news) => {
//     const newsList = document.getElementById("news-list");
//     if (isError) {
//         newsList.innerHTML += `
//         <h2>News Can Not Be Fetched </h2>
//         <img src="./img/404.png" alt=""/>

//         `;
//         // true oldugu için iserror bu block calıscak
//         return;
//     }
//     news.forEach((item) => {
//         const { title, description, urlToImage, url } = item; //! dest
//         newsList.innerHTML += `
// <div class="card" style="width: 18rem;">
//   <img src="${urlToImage}" class="card-img-top" alt="...">
//   <div class="card-body">
// <h5 class="card-title">${title}</h5>
// <p class="card-text">${description}</p>
// <a href="${url}" class="btn btn-primary">Details</a>
//   </div>
// </div>`;
//     });
// };

// Buraya kadar

// 780d2289b4ee4b5696e1cd0d3cec9148