// console.log("***** FOR *******")
//? Ornek: 1 den n kadar sayıları toplayan kodu yaziniz.

// const n = (+prompt("Bir sayi giriniz"))
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
// toplam += i;
//
// console.log("SONUÇ:", toplam);
// }
//

//? Ornek: 0-100 Arasinda 10 adet rastgele sayi ureten kodu for döngüsü ile yaziniz...

// for (let i = 1; i <= 10; i++) {
// const rastgele = math.random() * 100
// console.log(rastgele);
// }

//! Burada *100 yapmamızın sebebi 0,788480  0,5845  0,23545 gibi çoçlar elde etmek yerine 78,8554 58,256546 23,112 gibi sonuçlar elde edelim diye yaptık//

//? Ornek: 0-100 Arasinda 10 adet rastgele tamsayi ureten kodu for döngüsü ile yaziniz...

// for (let i = 1; i <= 10; i++) {
// const rastgele = Math.round(Math.random() * 100);
// console.log(rastgele);
// }

//! burada 100 dememizin sebebi 0 ile 100 arasında dedği için eğer 1000 arası deseydi *1000 yazacaktık 20 deseydi *20 yazacaktık. //

//?Girilen bir sayinin Asal olup olmadiğini yazdıran kodu for dongulerini kullanarak yazininz.

// const sayi = Number(prompt("Pozitif bir sayi giriniz:"));
// let asal = true;
// if (sayi <= 1) {
// alert("sayi 1'den buyuk olmalidir.");
// }
// else {
// for (let i = 2; i < sayi; i++) {
// if (sayi % i === 0) {
// asal = false;
// break;
// }
// }
//
// const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
//
// console.log(`${sayi} ${sonuc}`);
// }
// !Bu şablonda şunu unutma bu gibilerde true oldugu sürecen hep içine içine gider ama false olursa istemez kimse onu duşına çıkarırlar bu şekilde düşünebiliriz :) bir kişi doğru söylerse hep onu içimize dahil etmek  isteriz gibi düşün ama birni sevmezsek onu dışarı atmaya çalışırız isteeyiz bu şekilde düşün :) //

//! 5 sayısını girdi kullanıcı diyelim, sayi = 5 olarak tanımlanıyor. 5<=1 mi  false o zaman else bak elsin içinde for döngüsüne bakıyoruz,i yi 2den başlat sonra i < 5 den (i < dür 5 den derken artık i yi 2 den başlatıp i yi 2 den 5 e kadar sordurcaz yani i bir 2 olcak, bir 3 olcak, bir 4 olcak, bir 5 olcak...) hayır değil ozaman if e bakıyoruz 5 bölünür iki ye hayır  o zaman break// bu şekilde döngü asal = false kısmına hiç girmediğinden break yapıp durdugundan hiç bir şekilde false olmadıgından true sonucu verir  yani 5 asaldır yazdırır en son..

