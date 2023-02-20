console.log("FETCH");
// API den verri çekme işlemi yapıcaz 

// fetch("https://api.github.com/users").then((res) => console.log(res));

// fetch("https://api.github.com/users")
// .then((res) => res.json())
// .then((data) => console.log(data));

fetch("https://api.github.com/users")
    .then((res) => {
        console.log(res);
        //! error handling
        if (!res.ok) {
            throw new Error("Something went wrong");
        }
        return res.json();
    })

    .then((data) => updateDOM(data))
    .catch((hata) => console.log(hata));

const updateDOM = (users) => {
    const userDiv = document.querySelector(".users");
    console.log(users);
    users.forEach((user) => {
        console.log(user);
        userDiv.innerHTML += `<h2>${user.login}</h2>
        <img src="${user.avatar_url}" alt=""/>
        
        
        `;
    });


};


