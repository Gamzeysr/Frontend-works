const addBtn = document.querySelector('#todo-button');
const input = document.querySelector('#todo-input');
const toDo = document.querySelector('.todos');



// kullanıcının girecek oldugu seylere uli diyorum bu lşi olmadgından şimdi burada kendim olusturcam 
newUl = document.createElement("ul");
toDo.appendChild(newUl);



// Add butonumu yapıyorum 
addBtn.addEventListener("click", () => {

    if (!input.value) {
        alert("Please enter new Todo🤦‍♂️");
    } else {
        newUl.innerHTML += `<li id='ifade'><i class="fa-solid fa-check fa-lg"></i>
           <span class="content">${input.value}</span>
           <i class="fa-solid fa-trash"> </i></li>`;
        input.value = ' ';
    }
    input.focus();

});


