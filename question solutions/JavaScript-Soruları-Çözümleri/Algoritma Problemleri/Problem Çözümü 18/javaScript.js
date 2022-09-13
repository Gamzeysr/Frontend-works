// Klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.
// Geçme notu:50, vizenin %40ı, finalin %60ı geçerlidir 

let vıze = +prompt("Vize notunuzu giriniz");
let fınal = +prompt("Final notunuzu giriniz");

let sonuc = vıze*(40/100) + fınal*(60/100);

if(sonuc >= 50){
    console.log("Geçtiniz");
}
else{
    console.log("Kaldınız..")
}