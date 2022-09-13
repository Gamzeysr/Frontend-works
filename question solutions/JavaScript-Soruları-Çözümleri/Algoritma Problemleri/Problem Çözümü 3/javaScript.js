// 3 ve 5’e tam bölünen sayıları ve bu sayıların toplamını yazdıran javascript kodları

var toplam = 0;
for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
         
        if (i != 90) {
            document.write(i + "+");
        }
        else {
            document.write(i + "=");
        }
        toplam += i;
                     
    }
  
}
document.write(toplam);








