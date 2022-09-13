// Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız

let sayi = +prompt("Bir sayı giriniz");

let sonuc = 1;

for(let i = 1; i <= sayi; i++) {
    sonuc *= i;  
}
console.log(sonuc)