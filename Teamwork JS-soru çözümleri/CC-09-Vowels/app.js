const giris = document.querySelector('input');
const cikis = document.querySelector('p');
const buton = document.querySelector('button');

const sesli = ['a', 'e', 'i', 'o', 'u'];

buton.addEventListener('click', () => {
    let sayac = 0;
    let inputValue = giris.value.toLowerCase();
    // toLocaleLowerCase orjinal stringi değiştirmesin diye koydum ve küçük harf oluyor o yüzden
    for (let i = 0; i < inputValue.length; i++) {
        if (sesli.includes(inputValue[i])) {

            //! includes() metodu, belirtilen değerin dizi öğelerinde olup olmadığını test eder.Metod, belirtilen değerin içinde geçmesini değil, tam olarak eşleşip eşleşmediğini kontrol eder.Eğer aranan değer eşleşiyorsa true eşleşmiyorsa false döner.
            sayac++;


            // cikis.innerHTML = `There are ${sayac} vowels in <span> ${giris.value}  </span> `;
            // giris.value = ''


        }
        // cikis.innerHTML = `There are ${sayac} vowels in <span>${giris.value}</span> `;
        // giris.value = ''

    }
    cikis.innerHTML = `There are ${sayac} vowels in 
<span> ${giris.value}  </span> `;
    giris.value = ''
});
