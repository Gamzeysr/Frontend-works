// 1000 e kadar olan Mükemmel Sayıları ekrana yazdır.
// Kendisi hariç pozitif tam bçlenlerin toplamı kendisine eşitse

const sayi1 = parseInt(prompt("1. Sayı Gir :"));

let toplam =0;
for(let i=1; i<=sayi1/2; i++) {
    if(sayi1 % i == 0) {
        toplam += i;
    }
}
if(toplam == sayi1) {
    alert("Mükemmel")       
    }
    else {
        alert("Değil")
    }
