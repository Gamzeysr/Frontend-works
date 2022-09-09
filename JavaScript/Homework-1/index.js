//! ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

// let number_1 =+prompt("enter a number:");;
// let number_2 =+prompt("enter a number:");
// let operator = prompt("enter a operator:");
// 
// if (operatar === "+"){
// console.log(number_1 + number2);
// }
// else if (operatar === "-"){
// console.log(number_1 - number_2);
// }
// else if (operatar === "*"){
// console.log(number_1 * number_2);
// }
// else{
// console.log(number_1 / number_2);
// }
// 
// 
// ! ODEV2 :Clarusway'deki haftalık ders ve etkinlik programınızı, console'dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
// ! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
// ! Cuma -> Teamwork
// ! Cumartesi ->  InClass + Workshop
// ! Pazar -> Self-Study
// ! Aksi takdirde -> Yanlis gun girildi.
// let day = prompt("enter the day");
// let lesson;
// switch(day) {
// case "Monday":
// lesson =`InClass`;
// break;
// case `Tuesday`:
// lesson = `InClass`;
// break;
// case `Wednesday`:
// lesson = `InClass`;
// break;
// case `Thursday`:
// lesson = `InClass`;
// break;
// case `Friday`:
// lesson = `Teamwork`;
// break;
// case `Saturday`:
// lesson = `InClass + Workshop`;
// break;
// case `Sunday`:
// lesson = `Self-Study`;
// break;
// default :
// lesson = `You entered the wrong day`;
// 
// console.log(lesson);
// }

//!ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

// let maas = +prompt("maasınızı giriniz")
// 
// if (maas <= 5.500){
// console.log( maas *1.5);
// }
// else {
// console.log(maas*1.10);
// }
// 
//!ODEV4: Kredi Risk Programı
//!Console’dan kişinin gelir ve gider miktarını alan
//!eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi //!Verilebilir 🤑
//!değilse Kredi Verilemez 🥺
//!şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gelir = +prompt("gelirinizi giriniz:")
const gider = +prompt("giderinizi giriniz:")

console.log(gelir > gider ? "Kredi Verilebilir 🤑" : "değilse Kredi Verilemez 🥺")