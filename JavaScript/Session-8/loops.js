console.log("******** LOOPS IN ARRAYS *******");

//*?-------------------------- ÖRNEK -------------------------------------

// const dizi = [-5, 15, 22, -4, 45, 78];
//
// const topla = n => {
// let negatifler = 0;
// let pozitifler = 0;
// for (let i = 0; i > n.length; i++) {
// if (n[i] < 0) {
// negatifler += n[i];
// } else {
// pozitifler += n[i];
// }
// }
// console.log(`Dizideki POzitif Sayıların Toplamı: ${pozitifler}`);
// console.log(`Dizideki Negatif Sayıların Toplamı: ${negatifler}`);
// };
// topla(dizi);


////**********FOR IN  *************///
//?öRNEK:
// const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
// const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];
//
// const birleştir = (x, y) => {
// burada adlar ve soyadları cagırdım
// let adVesoyadlar = [];
// x ve y leri birleştirip atadgım yer
// for (let i in x) {
// adVesoyadlar[i] = `${x[i]} ${y[i]}`
// }
// return adVesoyadlar;
// };
// console.log(birleştir(adlar, soyAdlar));

// xin sıfırınci indisini ve ynin sfırıncı indisini advesoyadlar a ata sonra bana ver diyorum


//************* FOR LOOP ÖRNEK  **************/

//! Öğrenciler dizinde öğrenci isimleri saklanmaktadır. 
//! öğrencileri aramamızı sağlayacak ve aranılan öğrencilerden ne kadar sayıda bulundugunu ana programa döndürecek bir fonksiyon yazınız. eğer aranılan isimde bir öğrenci yok ise fonksyon "öğrenci bulunamadı" döndürülmelidir.
const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];
const findStudents = (arr, search) => {
    let counter = 0;
    for (let i in arr) {
        if (search === arr[i]) {
            counter++;
        }
    }

    if (counter === 0) {
        return `${search} can not be found.`
    } else {
        return `${search} found ${counter}times`
    }
};

const name = prompt("Please enter a name").toLowerCase();
console.log(findStudents(students, name));

