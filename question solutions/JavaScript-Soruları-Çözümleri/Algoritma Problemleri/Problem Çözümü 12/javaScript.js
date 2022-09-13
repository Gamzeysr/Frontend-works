// 1 ve 100 arasında bulunan Asal Sayıları ekrana yazdır. Dizi oluştur ve her bir asal sayıyı diziye at
//1 ve kendisine bölünen sayılara asal sayı denir.

let asalDizisi = [];
for(let i=1; i<100; i++) {
    let flag = true;
    for(let j=2; j<i; j++){
        if(i % j == 0){
            flag = false;
        }        
    }
    if(flag){
        asalDizisi.push(i);
    }    
   
}
    console.log(asalDizisi);
    // console.log(asalDizisi.length);