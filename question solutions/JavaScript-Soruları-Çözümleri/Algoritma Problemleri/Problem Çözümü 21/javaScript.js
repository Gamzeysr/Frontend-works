// 1 den 10 a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız

let yazdir = "";
for(let i = 1; i <= 10; i++){

    if(i != 10){
        yazdir += i +",";
    }
    else{
        yazdir += i;
    }
}
console.log(yazdir);