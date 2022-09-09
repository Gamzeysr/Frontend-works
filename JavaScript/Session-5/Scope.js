console.log("******* 3- SCOPE ******");

let sayi1 = 5;
console.log(sayi1);
//! burası global değişken oluyo yani dışta kalan yer çağırınca bize 5 sonucunu verir 

// const fonks1 = function () {
// sayi1 = 22;
// console.log(sayi1);
// };
// fonks1();
//! burası da function scope oldgundan cagırdımda bana 22 sayısını getirir 


// console.log(sayi1++);
// console.log(sayi1);
//! burada ilk 22 yani esas sayi olur sonra 23 olur. çünkü burada ilk önce esas sayıyı al sonra bir artır dedim 


// console.log(++sayi1);
// console.log(sayi1);
//! burası bana 23 ü getirir ilk önce esas sayıyı topla dedim

// let sayi2 = //! Global scope
// console.log(sayi2); //! 7
// 
// 
// 
// const fonks2 = () => {
// let sayi2 = 11; //! Function-Scope
// console.log(sayi2); //! 11
// };
// 
// fonks2();
// console.log(sayi2++); //!7
// 
// 

if (sayi2 === 8) {
    let sonuç = "Merhaba";
} else {
    sonuc = "Nasilsin";
    console.log(sonuc);

}
//! Burada sonu Nasilsim olur çünkü if kesni blogunda çalışır else blogu kendi blogunda çalışir 

// if (sayi2 === 8) {
// let sonuc = "Merhaba";
// } else {
// let sonuc = "Nasilsin";
// console.log(sonuc);
// 
// }
// 
//! yine Nasilsin i verirdi bize ama burada değişkeni let ile oluşturmuyş olduk 

if (sayi2 === 8) {
    let sonuc = "Merhaba";
} else {
    let sonuc = "Nasilsin";
    console.log(sonuc);
}

console.log(sonuc);
//! burada da hata verir çünkü if ve else blogu dışında yani global scope arıadıgı için dıŞarıdada globalscope olmadıgından hatra verir 