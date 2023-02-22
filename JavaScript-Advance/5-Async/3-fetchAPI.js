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