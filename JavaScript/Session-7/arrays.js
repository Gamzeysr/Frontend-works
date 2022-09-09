console.log("*******  ARRAYS ******")


// **** Dizi Tanimlama ******* //

//! 1.Yöntem (Arrat Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "ismet", "can", "canan"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);




// ! 2.Yöntem (Object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

//! 3. Yöntem (Array.of())
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

// ****** Diziden Veri Okuma-Yazma (indisleme)  ***** //


//! Diziden veri Okuma
console.log(diller[1]);
const go = diller[3];
console.log(go);
//? Burada go ya 3üncü indisi atamış olduk. Artık go diye çağırdığımızda Go gelicek


console.log(isimler[isimler.length - 1]);
// ?  isimler deki tanımladıgım elemanların en sonuncusunu getirecek 

console.log(isimler.at(-1));
//? at() fonk arraysleri sondan okur 

//! Diziden veri Yazma
// const isimler = ["ahmet", "ismet", "can", "canan"];
isimler[1] = "Saffet";
console.log(isimler);
//? ismet yerine saffeti yazmış olduk artık isimler i çağırdıgımızda 
//? ahmet  saffet can canan olarak gelicek bize

// isimler = ["Ali", "Veli"]
//? bu şekilde hata verir çünkü eleman sayılarıyla oynamadan dğişiklik yapabiliriz


//! Arraysların içindeki sayiları artırmak ve azaltmak istersek;

const numbers = [3, 2, 1];
console.log(numbers);
numbers[numbers.length - 1]++;
console.log(numbers);

//! Dizi içerisinde Dizi okuma
const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];
console.log(kisiler);


//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz
const yas55 = kisiler[5][2];
console.log(yas55);

//? kisiler icersiindeki yaslar dizinde bulunan 44v yasini bir eksiltiniz.
kisiler[5][1]--;
console.log(kisiler);
console.log(yaslar);



//? ==============================================================================
//?   DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ==============================================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//** pop() 
// son elemanı siler 

arabalar.pop()
console.log(arabalar);

//? Silinenin hangisi old görmek için bunu yaptık
const silinen = arabalar.pop();
console.log(arabalar, silinen);


// ** push()
// son elemanı ekler

const n = arabalar.push("citroen");
console.log(arabalar, n);


//** unshift  ()
// dizinin 0. indeksine eleman ekler 
const n1 = arabalar.unshift("audi");
console.log(arabalar, n1);


//*** shift() 
// dizinin 0.indexinni sildi 
const audi = arabalar.shift();
console.log(arabalar, audi);

//*** splice() 
// eklemeye nereden başluıcaz ve ne eklicez 

//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri 
arabalar.splice(1, 1, "Passat");
console.log(arabalar);

//*** reverse() 
// dizinin içindeki elemanları tamamen ters cevirir 
arabalar.reverse()
console.log(arabalar);

//** short() 
// ascıı tablosuna göre hizalama yapar  

const sayilar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayilar.sort();
console.log(sayilar);



// küçükten büyüğe doğru sılama yapar a-b
// buyukten kucuge dosru sıralama yapar b-a
sayilar.sort((a, b) => a - b);
console.log(sayilar);

//* fill()
//  dizi icindekilerin tamamına sıfır basacaktır 
const array1 = [1, 2, 3, 4];
// array1.fill(0);
console.log(array1);


// 2 inci indiksden başla 4 e kadar git 4üncü indiksi  dahil etmeden tamamına 1 ver 
array1.fill(1, 2, 4);
console.log(array1);

array1.fill(-1, 1);
console.log(array1);


//? ==========================================================
//? DIZI ERİSIM METOTLARI
//? =======================================================

//!  Bu dizi yöntemleri orjinali bozmuyor 