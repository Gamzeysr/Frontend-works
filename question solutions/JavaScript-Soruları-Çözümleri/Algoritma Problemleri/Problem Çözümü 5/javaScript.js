// Kullanıcının girdiği mesajı yine kullanıcının girdiği tekrar sayısı kadar yazdıran javascript kodları

let mesaj = prompt("Mesajınızı Giriniz");
let sayi = Number(prompt("Sayı Giriniz"));


for(let i = 1; i <= sayi; i++) {

    document.write(`${mesaj} <br>`);
}