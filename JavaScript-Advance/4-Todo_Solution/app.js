//? Selectors
const addBtn = document.querySelector("#todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.querySelector("#todo-ul");




addBtn.addEventListener("click", () => {
    if (todoInput.value.trim() === "") {
        alert("Please enter new todo😢");
    } else {
        const newTodo = {
            id: new Date().getTime(),
            completed: true,
            text: todoInput.value,
        };
        createListElement(newTodo);
        //!👆 Burada method olusturmamın amacı  yukarıda ki aldıgımız verileri bir fonksiyona atmak
        //*🧨 elsein içinde methodu olusturyoruz dikkat et!!!!
        todoInput.value = ""
    }
});
//! space ile girilirse ve bosluk olursa iki türlüde alert versin diye trim() kullandıık 
//! else de ise girilen verileri objeye attık isminede newTodo dedik

//! bu da fonksıyon oluyor artık 👇OLUSTURMUS OLDGUM FONKSIYONA NEWtODO YU GÖNDERİYORUM 
const createListElement = (newTodo) => {
    const { id, completed, text } = newTodo; //!destr.
    //** destr. ile cevizin kabugunu kırdık artık cevizi tüketebiliriz :))
    const li = document.createElement("li");
    // li.id = newTodo.id;
    // li.setAttribute("id", newTodo.id);
    //!destr. yaptıgımdan artık newTodo yazmama gerek kalmadı.👇
    li.setAttribute("id", id);

    // newTodo.completed && li.classList.add("checked");
    // 👆 newTodo da eger completed varsa li nin claslisstine checked i ekle dedik burada Yani burada artık completed true ise style daki checked classı devreye giriyor.Yani kullanıcının girdği input daki degerler checked clasında ne verdiysek onu alıyor 
    //! newTodo.completed && li.classList.add("checked"); yerine artık sadece  completed && li.classList.add("checked"); demem yeterli oluyor destr. yaptıgım için 👇
    completed && li.classList.add("checked");


    //* ok ıconu👇
    const okIcon = document.createElement("i");
    okIcon.setAttribute("class", "fas fa-check");
    li.appendChild(okIcon);
    // console.log(li);

    //! todo baslıgı için bir p elementi ve yazı duguöu olsturarak li'ye bagla👇
    const p = document.createElement("p");
    // const pTextNode = document.createTextNode(newTodo.text);
    //* 👆kullanıcınınn girecek yazı olgundan bu idye atanacagından her inputtaki herbır deger o yuzden bu sekilde yaptık 
    p.appendChild(pTextNode);
    li.appendChild(p);

    //! const pTextNode = document.createTextNode(newTodo.text); yerine artık const pTextNode = document.createTextNode(text); yazıyorum👇destr sayesinde
    const pTextNode = document.createTextNode(text);

    //* delete iconu👇
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fas fa-trash");
    li.appendChild(deleteIcon);


    //👇 meydana gelen li elementini de ul ye baglıyoruz. 
    todoUl.appendChild(li);

};

//👇 enter tusa basıldıgında da calıssın dıye asagıdakını yapıyoruz.
// js'ce dedikki👉 enter tusuna basıldıgında addBtn nunu click yap dedik 
todoInput.addEventListener("keydown", (e) => {
    if (e.code === 'Enter') {
        addBtn.click();
    }
});

//👇Bu sekil de  Baslangıcta input aktıf hale geliyor
window.onload = function () {
    todoInput.focus();
};