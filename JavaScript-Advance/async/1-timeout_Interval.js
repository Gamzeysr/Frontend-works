//*=============================================
//* 1- Senkron-Asenkron Programlama
//*=============================================
//! Senkron
//? Sıralama programlama demek
//? bildiğimiz yaptıgımız programlama

//! Asenkron
//? Performansı artırmak için geliştirilmiş bir yöntemdir.
//? Pclerin takılmamasını sağlar
// ?Akışı sıraya göre olmayabiliyr
//?AMACI:arkda planda calısan kodlar yazmak

//!JavaScript, single-treaded ve Asenkron Programlama dilidir.




//* Senkron
//*------------------------------------------------

// console.log("Hello");
//
// console.log("FS12");
// Normalde bu sekilde ilk hello çalışacak daha sonra FS12 çalısacak yani sıralı calısıyor

// console.log("Hello");
// alert("CW");
// console.log("FS12");
// Buradda ise alert i çalıştırmaya calısdıgından asagı FS12 ye geçmedi bu şekilde sıralamalı senkron calısırsa böğle oluyor.Yani kod suanda kesiliyor.Burada ki alert //! Blocking code olarak geciyor. yani kodumuzu blocklayan bir kod


//* Asenkron (setTimeout)
//*----------------------------------

// setTimeout(() => {
// console.log("Hi");
// }, 3000);
// bu fonksiyon içerisinde 3  sn yi tamamladıkdan sonra hi yi çağıracak 

// console.log("timeout");
// setTimeout(() => {
// console.log("Hi");
// }, 3000);
// console.log("timeout bitti");
// Buraada ilh timeout yazar sonra timeout bitti sonra en sonundada hi i yazar cünkü hi a 3 sn sonra gel dedik .
// Hi yazan yer bir kuyruga girip beklemiş oluyoır 

// console.log("timeout");
// setTimeout(() => {
// !non - blocking
// console.log("hi");
// }, 0);
// console.log("timeout bitti");
// Burada 0 olsa bile süre yine de bir sittimeout sıraya gireceğinden ilk timeout sonra timeout bitti en sonda hi yazılır 

//*** Asenkron (setInterval, clearInterval) 
//* ----------------------------------------
let counter = 0;
const intervalId = setInterval(() => {
    console.log(++counter);
    if (counter > 4) {
        clearInterval(intervalId);
    }
}, 1000);
// 
// 5 e kadar çalışsın istediğimizden  e kadar çalıştırdık bu fonk da sayacımızı 



let counter = 0;
const intervalId = setInterval(() => {
    console.log(++counter);
}, 1000);
// bu sekilde bir fonksiyonumuz olursa 1000 e kadar calısır 



console.log("Timer Started");
let counter = 0;
const intervalId = setInterval(() => {
    console.log(++counter);
    if (counter > 4) {
        clearInterval(intervalId);
    }
}, 1000);
console.log("Timer stoped");
// bu sekilde olsaydı eger ilk Timer started sonra Timer stoped sonrasındada 1,2,3,4,5 olucakdı sonuc cunku setInterval kuyruga giriyor 



console.log("Timer Started");
let counter = 0;
const intervalId = setInterval(() => {
    console.log(++counter);
    if (counter > 4) {
        clearInterval(intervalId);
        console.log("Timer stoped");
    }
}, 1000);
//  eger bu sekilde olsaydı o zaman cıktı ilk Timer started sonra 1,2,3,4,5 olup sonrasında Timer Stoped olacaktı
