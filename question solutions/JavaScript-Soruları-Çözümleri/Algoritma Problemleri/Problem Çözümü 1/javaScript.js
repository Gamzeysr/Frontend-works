// 1 DEN 100 E KADAR SAYILARI ALT ALTA YAZDIRINIZ

for(let i = 1; i < 100; i++) {
    console.log(`${i} <br>`);
}



// 100 DEN 1 E KADAR SAYILARI ALT ALTA YAZDIRINIZ

for(let i = 100; i > 0; i--) {
    console.log(`${i} <br>`);
}



// 1 ile 100 arasındaki ÇİFT sayıları ekrana javascript kodları ile yazdırınız

for(let i=0; i <= 100; i++) {

    if(i % 2 == 0)
    document.write(`${i} <br>`);
    // console.log(i + "<br>");
}


// 1 ile 100 arasındaki ÇİFT sayıları TERSTEN ekrana javascript kodları ile yazdırınız

for(let i = 100; i >= 0; i--) {

    if(i % 2 == 0){
        document.write(`${i} <br>`)
    }
}



// 1 ile 100 arasındaki TEK sayıları ekrana javascript kodları ile yazdırınız


for(let i = 0; i <= 100; i++) {

    if(i % 2 !== 0) {
        document.write(`${i} <br>`);
        // console.log(i + "<br>");
    }
}
// for(let i = 0; i < 100; i++){

//     if(i % 2 == 1) {
//         console.log(`${i} <br>`)
//     }
// }




// 1 ile 100 arasındaki sayıları 5 in katları halinde ekrana javascript kodları ile yazdırınız


for(let i = 0; i <= 100; i++) {

    if(i % 5 == 0) {

        document.write(`${i} <br>`);
        // console.log(i + "<br>");
    }
}



// 1 ile 100 arasındaki sayıları 5 in katları yazmayacak şekilde ekrana javascript kodları ile yazdırınız


for(let i = 0; i <= 100; i++) {

    if(i % 5 !== 0) {

        document.write(`${i} <br>`);
        // console.log(i + "<br>");
    }
}



// 1 ile 100 arasındaki sayıları 5 ve 7 nin katları yazmayacak şekilde ekrana javascript kodları ile yazdırınız


for(let i = 0; i < 100; i++){

    if(i % 5 !== 0 && i % 7 !== 0){
        console.log(`${i} <br>`);
    }
}



// 1 ile 100 arasındaki sayıları 0 dan başlayıp 4 er artacak şekilde ekrana javascript kodları ile yazdırınız


for(let i = 0; i <= 100; i++) {

    if(i % 4 == 0) {

        document.write(`${i}  <br>`);
        // console.log(i + "<br>");
    }
}




// 1 ile 100 arasındaki sayıları 4 ve katları olmayacak şekilde ekrana javascript kodları ile yazdırınız


for(let i = 0; i <= 100; i++) {

    if(i % 4 !== 0) {

        document.write(`${i}  <br>`);
        // console.log(i + "<br>");
    }
}




// 1 ile 100 arasındaki ekrana yazılan sayıların, 20 ile 40 arasındaki sayıların 3 ün katları olacak şekilde ekrana javascript kodları ile yazdırınız


for(let i = 0; i <= 100; i++) {
   
    if(i > 20 && i < 40){

        if(i % 3 == 0) {

            document.write(`${i}  <br>`);
            // console.log(i + "<br>");
        }
    }    
}





// 1 ile 100 arasındaki ekrana yazılan sayıların, 20 ile 40 arasındaki sayılar 3 ün katı olacak şekilde ekrana javascript kodları ile yazdırınız


for(let i = 1; i<101; i++){

    if (i>=20 && i<=40){
    
            if(i%3 !==0){
            console.log(i);
            }
    }
    
    else{
        console.log(i);
    }
    }



// 1 ile 100 arasındaki ekrana yazılan sayıların, 20 ile 40 arasındaki sayıların 3 ün katları olmayanları ekrana javascript kodları ile yazdırınız


for(let i = 0; i <= 100; i++) {
   
    if(i > 20 && i < 40){

        if(i % 3 !== 0) {

            document.write(`${i}  <br>`);
            // console.log(i + "<br>");
        }
    }    
}




// 1 ile 100 arasındaki ekrana yazılan sayıların, 20 ile 40 arasındaki sayıların 3 ün katları olmayanları ekrana javascript kodları ile yazdırınız


for(let i =0; i <= 100; i++) {

    if (i > 20 && i < 40) {

        if (i % 3 !== 0) {
            console.log(`${i} <br>`)
        }
        
    }
    else{
        console.log(`${i} <br>`)
    }
}