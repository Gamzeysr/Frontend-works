console.log("****** FUNC DECLARATION ******")

// function yaşYazdır(ad, dogumTarihi) {
// const yaş = 2022 - dogumTarihi;
// console.log(`Benim adım ${ad} ve Ben ${yaş} yaşındayım`);
// return yaş;
//
// }
//
// const yaşMurat = yaşYazdır('Murat', 1990);
// const yaşJohn = yaşYazdır('John', 1980);
// const yaşAyşe = yaşYazdır('Ayşe', 1994);
//
// console.log(`Yaşların ortalaması =${(yaşMurat + yaşJohn + yaşAyşe) / 3}`);

//! Returnu çalıştırmasaydık yaş ortalaması =34 yerine Nan alırdık.Return ün yaptıgı işlem bilgileri hafızasında tutyor daha sonrasın da hafızadan alıp kullanabiliyoruz//

//*** */ Örnek ***.//

//! yazdir(); burada olsada fonksiyonu çağırabiliriz.
// function yazdir() {
// console.log('merhaba');
// }
//
// yazdir();//* invoke,call, cagirma
// yazdir();

//! parametre olması şart değil ve burada yazdır() i iki kere dediğimizden iki kere merhaba yazisini çağırmış olduk

//**** ÖRNEK-2 ***//

// function selamlama(ad, Soyad) {
// console.log(`Merhaba ${ad} ${Soyad}`);
// }
//
// selamlama("Can", "Yilmaz");
// selamlama("Canan", "Ozturk");
// selamlama("Ayse",);
//! buradaki ayse undefined olur çünkü iki parametle var ve biz bir değişken tanımladık yani ad ın karşısında evet ayse var ama soyadın karsınızda bir şey olmadıgından undifined verdi

// selamlama("Ayse", "");
//!ger bu şekilde olursa o zaman Mehaba ayşe boşluk olur çünkü "" string değer//

// function selamlama(ad, Soyad = "Noname") {
// console.log(`Merhaba ${ad} ${Soyad}`);
// }
//
// selamlama("Can", "Yilmaz");
// selamlama("Canan", "Ozturk");
// selamlama("Ayse");
//! burada aysenin yanı boş oldugundan soyad parametresine bir değer atarsak yukarıda karşısına o zaman yukarıda atadığımız değer yazar şekilde old gibi..//


//***** ORNEK-3 *****//
// function yasHesapla(isim, dogumTarihi) {
// const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
// return sonuc;
// }
// 
// const mesaj1 = yasHesapla("Elif Can", 1990);
// console.log(mesaj1);
// 

// function yasHesapla(isim, dogumTarihi) {
// const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi
// } dir.`;
// return sonuc;
// }
// 
// const mesaj1 = yasHesapla("Elif Can", 1990);
// console.log(mesaj1);

//! 2022 yerine new Date().getFullYear() yazarak aynısını yapmış oldu ve ileride hep bu şekilde kullanıcaz //


//***** ORNEK-4 ******/



// function tekCift(sayi) {
// return sayi % 2 ? "TEKTİR" : "ÇİFTTİR";
// }
// 
// console.log(tekCift(5));
// console.log(tekCift(2));
// 

// ödevdi

// function dörtİslem(sayi1, sayi2) {
// let toplama = sayi1 + sayi2;
// let çarpma = sayi1 * sayi2;
// let bölme = sayi1 % sayi2;
// let çıkarma = sayi1 - sayi2;
// return ` Bu bir ${toplama} Toplama sonucudur , Bu bir ${çarpma} çarpma sonucudur,Bu bir ${bölme} bölme sonududur,Bu bir ${çıkarma} çıkarma sonududur`
// }
// 
// let sonuc = dörtİslem(4, 20);
// console.log(sonuc);
// 

console.log("**********  EXPRESSION  ***********")

// !bu fonksiyonda tanımllanmadan önce çağırılmaz//
// console.log(tekCift1(9));

//! Burada fonkiyonu tanımlıyoruz sonra çağırıyoruz
// const tekCift1 = function tekCift(sayi) {
// return sayi % 2 ? "TEKTİR" : "ÇİFTTİR";
// }

// console.log(tekCift1(5));
// 


//*** ORNEK *** */
//! 3 Sayının en büyüğünü bulan fonks. 
// const buyukBul = function (n1, n2, n3) {
// if (n1 >= n2 && n1 >= n3) {
// enBuyuk = n1;
// } else if (n2 >= n1 && n2 >= n3) {
// enBuyuk = n2;
// } else if (n3 >= n1 && n3 >= n2) {
// enBuyuk = n3;
// }
// return enBuyuk;
// };
// console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9, -1));
// 

const topla = function (s1, s2) {
    return s1 + s2;
};

const cikar = function (s1, s2) {
    return s1 - s2;
};
const bol = function (s1, s2) {
    return s1 / s2;
};
const carp = function (s1, s2) {
    return s1 * s2;
};

const hesapla = function (s1, s2, islem) {
    let sonuc = 0;
    switch (islem) {
        case "+":
            sonuc = topla(s1, s2);
            break;
        case "-":
            sonuc = cikar(s1, s2);
            break;
        case "/":
            sonuc = bol(s1, s2);
            break;
        case "*":
            sonuc = carp(s1, s2);
            break;
        default:
            break;
    }
    console.log("SONUC:", sonuc);
    return sonuc;
};

hesapla(3, 5, "+");
console.log(hesapla(4, 3, "/"));