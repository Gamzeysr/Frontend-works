console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim
const newP = document.createElement("p");
newP.id = "new-par";
newP.setAttribute("class", "new-class");
const text = document.createTextNode("This is a new p element");
newP.appendChild(text);
//👆 p ile yazı elementini bi cocuk ataması yaparak appendChild ile baglamış olduk 
console.log(newP);

const h2 = document.querySelector(".item-list h2");
// 👆ITEM LISTIN altına yazdırmak istediğimden h2 yı burada bu sekilde html den getiriyorum yanı seciyorum 
h2.after(newP);
// 👆sonrada  h2 elementin altına olusturdugum newP elementini yazdır dıyorum 

// //? getAttribute()
// console.log(newP.getAttribute("class"));
// console.log(newP.getAttribute("id"));
// console.log(newP.getAttribute("name"));

// //? classList
// console.log(newP.classList.contains("par")); //? true
// newP.classList.add("new-class");
// console.log(newP);
// newP.classList.remove("new-class");

// //? INNER HTML (Ciddi Guvenlik aciklari var)
// const ul = document.querySelector("ul");
// ul.innerHTML += `<li id="list-id" class="list">Boostrap</li>`;
