///*==================================================
//*         FOREACH METHOD
//*===========================================================
console.log("****** ITERATION **********");

//?Örnek:
//? Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];

// fiyatlar.forEach((g) => console.log(g));

//?ornek: fiyatlar dizisindekilerin toplamını konsola yazdiriniz.

let sum = 0;
fiyatlar.forEach((g) => (sum += g));
// console.log("g:", sum);


//?örnek:
//?fiyatlar dizindeki her bir ara toplam degerini konsola bastiriniz.Ayrıca her bir fiyata % 10 zam yapiniz

// let total = 0;
// fiyatlar.forEach((price, index))=> {
// total += fiyatlar;
// console.log(`${index + 1}.iteration: ${total}`);
// price[index]= price *1.1
// });

//****MAP METHOD  *****/
//? Bir dizede ki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız


let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "Canan"];

// const bigName = names.map((name) => name.toUpperCase());
// console.log(bigName);

//? ÖRNEK:
//?tlFiyatlar dizisindeki rakamların euro ve dolar karsiliklarını hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlFiaytlar = [100, 150, 100, 50, 80];

// const euroPrices = tlPrices.map((tl) => (tl / euro).toPrecision(3));
// console.log(euroPrices);
// const dolarPrices = tlPrices.map((tl) => (tl / dolar).toFixed(2));
// console.log(dolarPrices);


//***** filter methodu *****/
//? Maası 10000 den buyuk olanları ayrı bir diziye saklayalim

// const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const bigthan = maaslar.filter((s) => s < 10000);
// console.log(bigthan);

// const range = maaslar.filter((s) => s < 6000 && s <= 10000);
// console.log(r1ange);

// koşulları and ile or ile birleştirebilirz


//****CHAINING (PIPELİNE) ******/
// Ardı ardına kullanılabilir.Böylelikle ardışık bir şekilde diziler işlenebilir.

//? Örnek:
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri yeni diziye saklayalim.

// const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
//
// const smallmaas = maaslar.filter((m) => m < 9000)
// .map((z) => Math.trunc(z * 1.1))
// .forEach((y) => console.log(y));
//
// // const arr = [

//**************************
//*  REDUCE METHOD
//************************** 
//!  REDUCE 4 adet parametre alabilmektedir 

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
// amacımız bu dizideki değerlein toplamını bulmak


// const sumOfSalaries = salaries.reduce((acc, val) => acc + val);
// console.log("SUM:", sumOfSalaries);

//? ÖRNEK :
const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// Bir Firma 9000 TL den az olan maaşlara %10 zam yapmak istiyor ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek isitiyor. İlgili programı yazınız.

const zamlikişiler = maaslar.filter((x) => x <= 9000)
    .map((y) => y * 1.1).reduce((acc, top) => acc + top, 0);


console.log("Sum of raised salaries:", zamlikişiler);