const bir = document.getElementById("bir")
const iki = document.getElementById("iki")
const uc = document.getElementById("uc")

// bir.addEventListener("click", function () {
// alert("Birinci elemana tıkladınız. (Yeşil Alan)");
// })
//
// iki.addEventListener("click", function () {
// alert("İkinci elemana tıkladınız. (Sarı Alan)");
// })
//
// uc.addEventListener("click", function () {
// alert("Üçüncü eßlemana tıkladınız. (Turuncu Alan)");
// })
// BUBBLING
//! birinci elemaNa ayrı üçüncü elemana ayrı ikinci elemana ayrı uyarı mesajı geliyor

//! en dışta id değeri bir, ortada id değeri iki ve en içte de id değeri uc olan eleman bulunuyor.Haliyle ben en içteki eleman olan uc'e yani turuncu alana tıkladığım zaman aslında hem iki hem de bir id değerli elemanlara da tıklamış oluyorum. Peki yukarı yazdığım click olaylarından önce hangisi çalışmalı?

// içten dışa doğru çalışırsa yani üc> iki > bir buna biz bubuling diyoruz

// bir> iki > uc diye calısınca bu olayada capturing diyoruz

//? eger yukarıda ki gibi bırakırsaK Bu bubling olarak çalışır yani tıklanmalar içten dışa doğru çalışır

//? eger asagıdaki gibi olursa cappturing olarak çalışır dıştan içe doğru çalışır

bir.addEventListener("click", function () {

    alert("Birinci elemana tıkladınız. (Yeşil Alan)");
}, true)

iki.addEventListener("click", function () {
    alert("İkinci elemana tıkladınız. (Sarı Alan)");
}, true)

uc.addEventListener("click", function () {
    alert("Üçüncü elemana tıkladınız. (Turuncu Alan)");
}, true)
// 