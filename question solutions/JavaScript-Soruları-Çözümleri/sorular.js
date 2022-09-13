// 1) - verilen sayının basamak değerlerini birbiri ile çarpacağız.kaç defada tek haneli basamağa ulaşıyor ? 

// let tekhane = (sayi) => {
    // sayi = "" + sayi;
    // sayi = sayi.split("");
    // let toplam = 1;
    // let counter = 0;
    // while (sayi.length > 1) {
        // for (let i = 0; i < sayi.length; i++) {
            // toplam *= sayi[i];
        // }
        // sayi = ("" + toplam).split("");
        // toplam = 1;
        // counter++;
    // }
    // return counter;
// };
// console.log(tekhane(999));

// soru - 1 map ile çözümü,
// 
    // function persistence(num) {
        // var times = 0;
// 
        // num = num.toString();
// 
        // while (num.length > 1) {
            // times++;
            // num = num.split('').map(Number).reduce((a, b) => a * b).toString();
        // }
// 
        // return times;
    // }
//? 2) - verilen bir sayının binary sistemdeki karşılığı olan sayının içerisinde kaç adet 1 rakamı var.
// let binary = (sayi) => {
    // sayi = sayi.toString(2);
    // console.log(sayi);
    // sayi = ("" + sayi).split("0");
    // let counter = 0;
    // for (let item of sayi) {
        // console.log("item : ", item);
        // if (item == "1") {
            // counter++;
        // }
    // }
    // return counter;
// };
// console.log(binary(20));
// yöntem 2
// countBits = (n) => n.toString(2).split("0").join("").length; 