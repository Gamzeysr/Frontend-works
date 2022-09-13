let hak = 5;
let rastgele = Math.round(Math.random()*100);
console.log(sayı);

let tahmin; 
let   takrar;
hak -= 1;

do {
    do{
        tahmin = Number(prompt("Tahmin giriniz..."));
        if(tahmin === rastgele){
            console.log(`tebrikler ${5-hak} kerede bildiniz`);
        }
        else if(tahmin < rastgele) {
            console.log("ARTTIR ⬆");
        }
        else {
            console.log("AZALT ⬇");
        }
    }
    while(hak > 0)
    if(tahmin !== rastgele) {
        console.log("Üzgünüz kaybettiniz");
    }
    let tekrar = prompt("Yeniden oynamak ister misiniz? E= Evet").toUpperCase()
}
while (tekrar === `E`);
