console.log("********* EVENTS ********");


//* EXAMPLE-1 (Mouse over ,Mouse out)********


const h1 = document.querySelector("#header h1")
console.log(h1);
//1. Burada hedaer id nin içindeki h1 i getir dedilk
//? ✨ 3. mehod 
h1.onmouseover = function () {
    h1.style.color = "red";
    h1.style.fontWeight = "200";
    console.log("onmouseover");
};
//2.👆 baslıgın üzerine gelindiğinde yazsıını incelt ve rengini kırmızı yap dedik 

h1.onmouseout = () => {
    h1.style.color = "black";
    h1.style.fontWeight = "900";
    console.log("onmouseout");
};
//3.👆 mouse baslıgın üzerinden ayrılınca rengi siyah kalıngın da 900 olsun dedik 
//! DİKKAT:Burada önemli bir ayrıntı mouseoutu yazmasaydım mouseun üzerine gelindiğinde kırmızı ve ınce olması olrak ayarlı oldugundan baslıgın üzerine gelince mouse kırmı ve ınce olacak ve o sekilde kalacaktı. Ama baslıkta omouse da devreye sokunca mousun uzerinden ayrılınca sıyah ve kalınlasdı.
//?✨ 4.method (addEventListener)
h1.addEventListener("click", () => {
    alert("H1 pressed");
    console.log("h1")
});

// //*** EXAMPLE-2 (addEventListener()) */


document.getElementById("btn").addEventListener('click', function () {
    const input = document.querySelector("#input");
    if (!input.value) {
        alert("Please enter an item");
    } else {
        alert(`${input.value} entered`);
    }

});


// ternary hali
// !input.value ? alert("Please enter an item") : alert(`${input.value} entered`)
// //* EXAMPLE-3
// //* -------------------------------------------------
// const list = document.querySelectorAll(".list"); //?nodelist

// list.forEach((li) => {
//     li.style.transition = "all 0.8s";
//     li.style.lineHeight = "2rem";

//     li.onmouseover = () => {
//         li.style.fontSize = "2rem";
//         li.style.transform = "translateX(10px)";
//     };

//     li.onmouseout = () => {
//         li.style.fontSize = "1rem";
//         li.style.transform = "translateX(-10px)";
//     };
// });

// const print = () => {
//     console.log("Starting");
// };