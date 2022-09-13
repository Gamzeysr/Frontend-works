// Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız

let sayi1 = Number(prompt("Birinci sayıyı giriniz"));
let sayi2 = Number(prompt("İkinci sayıyı giriniz"));
let sayi3 = Number(prompt("Üçüncü sayıyı giriniz"));

let ortalama = ((sayi1 + sayi2 + sayi3) / 3).toFixed(3);

document.write(`${ortalama}`);