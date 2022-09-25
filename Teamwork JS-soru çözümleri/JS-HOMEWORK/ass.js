//! Ödev1: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden 
birisi girilğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola 
ortalamayı bastıran uygulamayı yazınız.


let not;
let sum = 0, sayi = 0;
while (true) {
    not = prompt(`Not
     girişi yapınız: `);
    if (not == `q` || not == `Q`) {
        break
    }
    sum += Number(not);
    sayi += 1;
}
let ort = sum / sayi;
console.log(`Ortalama: ${ort}`);


//* Ödev_2
//* TAHMİN OYUNU

//! Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de 
bilmesini isteyecektir.Her yanlışta hakkını bir düşürecek ve ARTTIR / AZALT diyerek 
kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" 
eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.En sonunda oyuna devam etmek 
isteyip istemediği sorulup istiyor ise oyuna devam edilecek istemiyor ise çıkış yapılacaktır.

    do {
    let hak = 5;
    const rastgele = Math.round(Math.random() * 100);
    console.log(rastgele);
    do {
        let tahmin = Number(prompt(`Lütfen 0-100 arasında bir sayı giriniz: `));
        hak -= 1;
        if (tahmin === rastgele) {
            console.log(`Tebrikler ${5 - hak} denemede bildiniz `);
            break;
        } else if (tahmin > rastgele) {
            console.log(`Tahmininizi azaltınız⬇️`);
        } else {
            console.log(`Tahmininizi arttırınız⬆️`);
        }
    } while (hak > 0);
    if (hak === 0) {
        console.log(`Üzgünüz ${rastgele} sayısını bulamadınız`);
    }
    istek = prompt(`Oyuna devam etmek ister misiniz(e/h): `)
} while (istek == `e`);
console.log(`Tekrar bekleriz..`);

