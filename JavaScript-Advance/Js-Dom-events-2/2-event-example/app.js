console.log("**** app.js *******");

//? Selectors
const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");

const newUl = document.createElement("ul");
langList.appendChild(newUl);
// burdada kullanıcının yazacaklarını ul nın içine atılsın dıye olusturdum ,kullanıcılar ınputun içine yazagından o yazıyı ınputun ıdsıne bağladım 

// //? addBtn event handler
addBtn.addEventListener("click", () => {
    if (!langInput.value) {
        alert("Please enter a language");
    } else {
        newUl.innerHTML += `<li>${langInput.value}</li>`;
        langInput.value = "";
    }
    langInput.focus();
});


// //? deleteBtn event handler
deleteBtn.addEventListener("click", () => {
    newUl.childElementCount > 0
        ? newUl.removeChild(newUl.lastElementChild)
        : alert("There is no item to delete");
});

// //? enter key and  del key event handler
langInput.addEventListener("keydown", (event) => {
    console.log(event);
    console.log(event.target);
    //! 👆eventın nereden geldiğini bakmak için bu önemli
    console.log(event.keyCode);
    console.log(event.code);
    //! 👆 yani enter e delete tusuna basıldıgında hangi numaraları veriyor bana onu bakmak için bunu yaptık 

    if (event.keyCode === 13) {
        addBtn.click();
    }

    if (event.code === "Delete") {
        deleteBtn.click();
    }

    if (event.keyCode === 46) {
        deleteBtn.click();
    }
});


//! 🏄‍♂️focus u bu sekildede kullanablilirz👇

// //? onload event handler
// window.addEventListener("load", () => {
//     langInput.focus();
// });
