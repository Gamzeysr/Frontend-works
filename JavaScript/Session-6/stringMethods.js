console.log("*** STRING METHODS ***");

const str1 = "Clarusway"
//! Klasik yöntem(String Literals) ile string tanimlanirsa bu string bir primitive degiskendir 

const str2 = "Hello"
const str3 = "Full Stack"

console.log(str1, typeof str1);
//! bunun tipi stringdir .
//! Primitivedir anneden cocuk dgdu diye düşünebilirz 


const str4 = new String("Hello FS");
console.log(typeof str4);
//! bunun tpede bir objecttir
//! Buda non-primitive dir 

//! str1. bu sekilde yapınca normalde primitive iken javascript de non-primitive şeklinde oluyor.bunu non-primitive şeklinde olsun diye araya wrapper oluşturur. 
//! Yani primitive seklinde ki string i non-primitive wrapper yaparDada sonra işi bitince devredısı kalır , kullanacagımız aman tekrar devreye girer 

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; ///*** Concatination
console.log(str5, typeof str5);


// ***** concat() - immutable *****//

console.log(str1.concat(str2)); // *** Orjinal degerler bozulmaz
console.log(str1, str2);


// ***** Assigning ile degişkenin degeri degistirilebilir.
// **** Bunda dikkat etmemiz gereken sadece let ile yukarıda tanımlamış olmak 
// str1 = str1.concat(str3, "Path");
// console.log(str1);

//******** toUpperCase(), tolLowerCase()

const myName = "Noah Adams"
console.log(myName.toUpperCase());

console.log(myName.toLowerCase());


let yourName = "ismet";
yourName = yourName.toLocaleUpperCase();
console.log(yourName);

//! Buradada Local türkçe karakterleri yazmızı sağlıyor normalde local kullanmadan toUpperCase deseydim defaultu ingilizce oldugundan ISMET yazardı Local burada I LERİ İ yapmamızı sağladı....


//! ORNEK : İki string'i esit veya degildir diye kiyaslayarak sonucu donduren fonksiyonu yaziniz 
const esitMi = (str1, str2) => {
    return str1.toLocaleUpperCase() === str2.toLocaleUpperCase() ?
        `${str1} ile ${str2} eşittir` :
        `${str1} ile ${str2} eşit değildir`;
};

console.log(esitMi("Merhaba", "MERHABA"));
console.log(esitMi("Hello", "Hell"));



//! NOT!!!! BU YUKARIDAKİ İŞFADEDE RETURN VE {} SÜSLÜ PARENTEZİ KULLANMASAKDA OLURDU ÇÜNKÜ TEK BİR SATIRD old için kullanmasakda oluyor .
//! Aşag daki örnek buna benzer bi örnek
// const esitMi = (str1, str2) =>
// str1.toLocaleUpperCase() === str2.toLocaleUpperCase() ?
// `${str1} ile ${str2} eşittir` :
// `${str1} ile ${str2} eşit değildir`;
//
// console.log(esitMi("Merhaba", "MERHABA"));
// console.log(esitMi("Hello", "Hell"));
//
//
// **** LocaleCompare() ****//

// iki tane stringi aksanlı şekilde kıyaslamayı bakıyourz bu kodda

const a = "résérvé"
const b = "RESERVE";

console.log(a.localeCompare(b, "en", { sentitivity: "base" }));

//? BASE: a ≠ b, a = â, a= A 
//? ACCENT: a ≠ b, a ≠ â, a= A 



//// ***** charAt() ***********//

const str6 = "Full Stack Path"
console.log(str6.charAt(5));
console.log(str6.charAt());
//! içinde bir şey belirtmezse ilk indiksi döndürür 

//! indisler 0 dan başlar
//! string ve arrayslerde bu şekilde çalışır
//
//? stringin son harifini ögrenmek istersek; 

console.log(str6.charAt(str6.length - 1));

//? kaç eleman var ögrenmek istersek;  
console.log(str6.length);


///********** includes() - case sentive ****** */

//? boolean bi methot aslında 
//? string ve arrayslerle birlikte çalısıyor
//? kücük büyük harf duyarlı calısıyor 

const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //? true
//? to be ikinci to be'dir.Case sensitive old. icin To be'yi kabul etmez.



console.log(word.includes("")); //? true
//? true cıkmasının sebebi boş bir string kabul ediyor ve cümle icindeki kelimenin arasındaki boslukları görüyr


console.log(word.includes("to be", 13)); //? true
//? buradada 13 üncü indisten itibaren to be başlıyor diyor 

console.log(word.includes("to be", 14)); //? false
//? buradada 14 üncü indisten itibaren to be başlıyor diyor ama 13 üncü indisden itibaren başladıgı için faklse verir


////********** indexOf() ,  lastIndesOf() - case sensitive  **********/

const toBe = word.indexOf("or"); //? 6
console.log(toBe);
//? Burada or'un ilk harfini buldugu andan itibaren cevirir 


console.log(word.indexOf("be")); //? 3
//? cümlede aslında iki tane be var evet ama bize ilk buldugunu döndürüyor 


console.log(word.lastIndexOf("be")); //? 16
//? cümlenin içerisinde ki sonda olan be yi arıyor

console.log(word.lastIndexOf("BE")); //? -1
//? Bulamazsa negatif bir sayi döndürür. eğer pozitif bir sayi döndürdüyse o zaman aradıgun ifade bulunmustur



//////***** Search() *******///

const buyukHarf = / [A-Za-z]/;
const nokta = /[.]/;
const virgul = /[,]/;

console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(word.search(virgul)); //? 18
console.log(word.search(nokta)); //? -1



// ****** startsWidth() , endsWith() -case sensitive ******//

let word2 = "Sen gulunce guller acar gul pembe";

console.log(word2.startsWith("Sen")); //? true
// cümle sen ile mi başlıyor diyor 
console.log(word2.startsWith("gulunce")); //? false

// cümlen gulunce ile mi başlıyor diyr 

console.log(word2.startsWith("gulunce", 4)); //? true
// Burada 4 üncü indisden sonra mı gulunce ifadesi diyor 


console.log(word2.endsWith("!")); //? true
console.log(word2.startsWith("acar", 23)); //? true


//// ********* replace(searchFor, replaceWith) --immutable ***///

let oku = "Oku Baban gibi, saf olma";

console.log(oku.replace("saf olma", "akilli ol"));

//! dedğimde aksi belirtilmediği sürece ilk yazdiğimiz aynı şekilde duruyor
//!  ama aş. gibi yapıp çağırdıgımızda artık değişmiş oluyor bir dahaki çağırmam da okuyu artık enb son değiştirdiğim değer cıkacak 
oku = oku.replace("saf olma", "akilli ol");

console.log("oku");


oku = oku.replace(/AKİLLİ/İ, "Zengin");
console.log(oku);
//! burada ki ifade ile de değiştirmiş oldum

