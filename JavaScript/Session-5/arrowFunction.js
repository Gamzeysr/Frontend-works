console.log("******* ARROW ******** ");

// ****** ORNEK: Silindir Hacmi /

// const r = Number(prompt("Lütfen bir yaricap giriniz"));
// const h = Number(prompt("yukseklik giriniz:"));
//
// const hacimHesapla = (r, h) => Math.PI * r * r * h;
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
//! toExponential yazarak sonucu 10 üzeri bir şeklinde gösteriyor /
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);
//! buradada tofixed dediğim için parantezin içinede 2 dedğim için bu  bana ondalıklı kısmın sadece 2 sini döndürür



//***** Yas Hesapla ****//



// const tarih = Number(promt("Dogum Tarihini giriniz:"));
//
// ! Arrow Function yöntemi ile tanimlama
// const yasHesapla = (tarih) => {
// const yas = new Date().getFullYear() - tarih;
// return yas;
// };
// console.log("YASINIZ:" + yasHesapla(tarih));
//
// ! Function Expression yöntemi ile tanimlama
//
// const yasHesapla2 = function (tarih) {
// const yas = new Date().getFullYear() - tarih;
// return yas;
// };
// console.log("YASINIZ:" + yasHesapla(tarih));
//
//

// ******* Fibonacci Terimleri ********//

//! Girilen navigator. terime kadar Fibanacci sayilarinin toplamını hesaplayarak yazdiran fonksiyonu döngü ile kodlayınız.
//! Fibanacci Terimler:1,1,2,3,5,8,13,21,...

// const fibo = (n) => {
    // let fib1 = 1;
    // let fib2 = 1;
    // let toplam = 0;
//
    // for (let i = 2; i < n; i++) {
        // toplam = fib1 + fib2;
        // fib1 = fib2;
        // fib2 = toplam;
        // console.log(toplam);
    // }
    // return fib2;
//
// }
//
// const n = +prompt("n terimini giriniz:");
// if (n <= 0) {
    // console.log("Lutfen 0 dan buyuk bir sayi giriniz.");
// } else {
    // console.log(`FIBO(${n})= ${fibo(n)}`);
//
// }
// 