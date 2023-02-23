console.log("FETCH");
// API den verri çekme işlemi yapıcaz 

// fetch("https://api.github.com/users").then((res) => console.log(res));

// fetch("https://api.github.com/users")
// .then((res) => res.json())
// .then((data) => console.log(data));

// fetch("https://api.github.com/users")
//     .then((res) => {
//         console.log(res);
//         //! 👇error handling denir.
//         if (!res.ok) {
//             throw new Error("Something went wrong");
//         }
//         return res.json();
//     })

//     .then((data) => updateDOM(data))
//     .catch((hata) => console.log(hata));

// const updateDOM = (users) => {
//     const userDiv = document.querySelector(".users");
//     console.log(users);
//     users.forEach((user) => {
//         console.log(user);
//         userDiv.innerHTML += `<h2>${user.login}</h2>
//         <img src="${user.avatar_url}" alt=""/>


//         `;
//     });


// };

// --------------------------------------------------------------

// fetch("https://api.github.com/users")
//     .then((res) => (res.json()))
//     .then((data) => console.log(data));

// ERROR HANDLİNG 👇
// fetch("https://api.github.com/uss")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("yanlıs gitti");
//         }

//         return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((hata) => console.log(hata));

// fetch("https://api.github.com/us")
//     .then((res) => {

//         if (!res.ok) {
//             throw new Error("yanslı ");
//         }
//         return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((hata) => console.log(hata));

// ----------------------------------------------------------------
//? 👇asenkron senkron olayına kısaca degindik tekrar burada

// let userData;


// fetch("https://api.github.com/users")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("something went wrong");
//         }
//         return res.json();
//     })
//     .then((data) => (userData = data))
//     // datamı userrDataya aktardım👆 
//     .catch((hata) => console.log(hata));
// console.log(userData);
// const userDiv = document.querySelector(".users")

//! ✨Bunun sonucu 👆 Undefined döner çünkü; fetch api de promise baglı olarakdan bi asenkron yapı oldgundan kuyruga girer bu kuyrukta makro kısmına girer  ilk önce fetch yapısnın içine girmeden globaldeki userData calısır sonra fetch ın içerisine girer veri alır ama bir daha biz yazdırma yapmadgımız için undefined görürüz
//!✨ ve fetch ın içini görmek için fonksiyona yazdırmamız lazım.Yani aşağıdaki gibi yapmalıyız👇👇

// fetch("https://api.github.com/users")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("something went wrong")
//         }
//         return res.json();
//     })
//     .then((data) => updateDOM(data))
//     .catch((hata) => console.log(hata));

// const updateDOM = (users) => {
//     const userDiv = document.querySelector(".users")
//     // console.log(users);
//     // artık elimde verilerim var artık verilerimi userDivine basıcam 
//     users.forEach((user) => {
//         // console.log(user);
//         userDiv.innerHTML += `<h2>${user.login}</h2>
//         <img src="${user.avatar_url}" width="300px" alt=""/>`
//     });
//     // 👆her bir itemin içine giriyorum bu sekilde 

// }

// 👆Bu yukarıdaki leri Desct. yöntemi ile kısaca yapabiliriz 👇

fetch("https://api.github.com/users")
    .then((res) => {
        if (!res.ok) {
            throw new Error("something went wrong")
        }
        return res.json();
    })
    .then((data) => update(data))
    .catch((hata) => console.log(hata));

const update = (users) => {
    const userDiv = document.querySelector(".users")
    users.forEach((user) => {
        const { login, avatar_url } = user; //!destructuring
        userDiv.innerHTML += `<h2>${login}</h2>
        <img src="${avatar_url}" width="300px" alt=""/>`

    })
}