//Konsoldan girilen 2 sayının Arkadaş Sayılar olup olmadığını ekrana yazdır.
// İki sayınınn birbirinin kendisi hariç bölenleri toplamına eşitse arkadaştırlar.

const sayi1 = parseInt(prompt("1. Sayıyı Gir :"));
const sayi2 = parseInt(prompt("2. Sayıyı Gir :"));
let toplam1 = 0, toplam2 =0;

for(let i = 1; i <= sayi1 / 2; i++) {
    if(sayi1 % i == 0){
        toplam1 += i;
    }
}
for(let i = 1; i <= sayi2 / 2; i++) {
    if(sayi2 % i == 0){
        toplam2 += i;
    }
}
console.log(`Toplam1 : ${toplam1} Toplam2 : ${toplam2}`);
if(toplam1 == sayi2 && toplam2 == sayi1){
    alert("Arkadaş Sayılardır");
}
else{
    alert("Değil");
}
