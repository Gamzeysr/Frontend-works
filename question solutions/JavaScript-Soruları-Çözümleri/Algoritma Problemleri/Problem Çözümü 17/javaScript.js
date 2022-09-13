// Ekrana bir sayı giriniz ve o sayıya kadar olan sayıların toplamını veren js kodu yazınız

let sayi = Number(prompt("Sayı Giriniz"));

let toplam = sayi*(sayi+1)/2;

document.write(`Toplam Sayı : ${toplam}`);