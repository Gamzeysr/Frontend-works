
//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini g
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnes
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonks
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fo
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise");

const myPromise = new Promise((resolve, reject) => {
    const success = Math.floor(Math.random() * 2);
    const data = { a: 1, b: 2 };
    if (success) {
        console.log("Data fetchd");
        resolve(data);
    } else {
        reject(new Error("Fetch halted"));
    }
});

myPromise
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
