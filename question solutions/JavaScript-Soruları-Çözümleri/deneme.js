//! soru 1  sayının basamak değerleri çarpımı kaç defada tek haneliye ulaşır

/*
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2) 9 9 9
4 --> 0 (because 4 is already a one-digit number)
*/

/*
1 - gelen integer değerin stringe yada diziye dönüşmesi lazım 
2 - döngü
3 -  toplam değişkeni 
4 - toplam 10 dan küçük oluncaya kadar bir döngü
*/

// let tekhane = (sayi) => {
//   sayi = "" + sayi;
//   sayi = sayi.split("");
//   let toplam = 1;
//   let counter = 0;
//   while (sayi.length > 1) {
//     for (let i = 0; i < sayi.length; i++) {
//       toplam *= sayi[i];
//     }
//     sayi = ("" + toplam).split("");
//     toplam = 1;
//     counter++;
//   }
//   return counter;
// };
// console.log(tekhane(990));

// yöntem 2
// function persistence(num) {
//     var times = 0;

//     num = num.toString();

//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }

//     return times;
//  }

//! soru 2  verilen bir sayının binary sistemdeki karşılığı olan sayının içerisinde kaç adet 1 rakamı var.

// let binary = (sayi) => {
//   sayi = sayi.toString(2);
//   console.log(sayi);
//   sayi = ("" + sayi).split("");
//   console.log(sayi);
//   let counter = 0;
//   for (let item of sayi) {
//     console.log("item : ", item);
//     if (item == "1") {
//       counter++;
//     }
//   }
//   return counter;
// };
// console.log(binary(20));

// yöntem 2
// countBits = (n) => n.toString(2).split("0").join("").length;

//! soru 3 verilen listede 1 den 100 e kadar rakamlar var fakat bir tanesi eksik eksik olan sayıyı bulunuz.

// let bul = (array) => {
//   //   1,2,3,4,6,7,8,9,10  1,2,3,4,5,6,7,8,9,10
//   array = array.sort((a, b) => a - b);
//   console.log(array);
//   for (let i = 1; i < 11; i++) {
//     if (i != array[i - 1]) {
//       return i;
//     }
//   }
// };
// console.log(Array.from(Array(12).keys()));
// console.log(bul([1, 2, 3, 10, 6, 7, 8, 9, 4]));

// yöntem 2
// function findMissing(normal, missing) {
//   sumNormal = (normal.length * (normal.length + 1)) / 2;
//   const sumWithInitial = missing.reduce((a, b) => a + b);
//   return sumNormal - sumWithInitial;
// }
// console.log(findMissing([1, 2, 3, 4, 5, 6], [1, 2, 3, 5, 6]));

// yöntem 3
// let bul2 = (array) => {
//   array = array.sort((a, b) => a - b);
//   console.log(array);
//   if (array[0] != 1) {
//     return 1;
//   } else {
//     for (let i in array) {
//       if (array[Number(i) + 1] - array[Number(i)] != 1) {
//         return Number(array[i] + 1);
//       }
//     }
//   }
// };
// console.log(bul2([10, 2, 3, 5, 6, 8, 7, 9, 4]));
//! soru 4 fonsiyona iki adet parametre gelecek. ikinci parametre ilk gelen parametrinin rakamlarının üstü olacak ve her rakamda artacak.
// !bu rakamların toplamı ilk gelen sayının tam katı olursa kat sayısını tam katı olmazsa -1 i return edecek.

//! soru 4 verilen dizide hangi elemanın kaç defa geçtiğini çıktı veren fonksiyon?
