console.log("***** Functipon-Scope******")

const fonk1 = function () {
    let sayi1 = 22;
    console.log(++sayi1);
}
// fonk1();
//! bu kısım functionun içine ulaşıyor 
// console.log(+sayi1);
//!  bu kısımda hata verir çünkü dışarıda global değişkeni arıyor 


console.log("***** Global-Scope *****");

let sayi2 = 5;
const fonk2 = function () {
    sayi2 = 10;
    console.log(`Fonk. İçi: ${sayi2}`);
}

// fonk2();
//! Burası bana fonk içini yazdırır
// console.log(`Fonk. Dişi:${++sayi2}`)
//! Burasıda bana fonk dışındaki değşkeni verir 

console.log("***** Global and Function aynı anda kullanılırsa ******");

let sayi3 = 3;
const fonk3 = function () {
    let sayi3 = 7;
    console.log(`Fonk.İçi :${sayi3}`);
};
// fonk3();
//! burası bana 7 yi veririş fun un içini görür
// console.log(`Fonk. Dışı: ${++sayi3}`);
//!fonksiyonun dışını verir bana yani global değşkeni verir sonu ++ oldgdanda 4 olur :)

console.log("****** Block-Scope *******");