import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  //* state = initialState yazmamızın sebebi state baslangıc verdik o yüzden.
  //* belirtmesek de oluyordu ama genelde reduxde belirterek yapıyoruz. 
  switch (action.type) {
    case INCREMENT:
      // artırma 👆
      return { counter: state.counter + 1 };
    case DECREMENT:
      // azaltma 👆
      return { counter: state.counter - 1 };
    case CLEAR:
      // silme👆
      return initialState;
    default:
      return state;
    // burada illa statin ilk halini yazmalıyız. 
  }
};
export default counterReducer;
//! Counteri artırma azaltma silme işlemlerini yapıcaz burada ki switch case yapılarıyla.
//!✨ Burada neden BUYUK HARFLE yazıyoruz sebebi: kodlamada hiç degeri değişmeyenlere biz constıt deriz. Bir kere baslangıctta deger alıyor b-ve bir daha değişmiyor.ve bu constıtlar string se genellkile buyuk harfle yazılır.
//* reducer lar de state ve action alıyor.reducer ın birinci parametresi her zaman statedir.İkinci parametre actiondur.✨{typeipayload}✨ şeklinde de görebiliriz.
//* payload da dispact in gönderdiğği veri.
//?? Birden fazla redureim olacagından o yuzden reducer klasötünde tapoluyorum. ve Her bir INCREMENT'i DECREMENT'i CLEAR'ı burada değişken olrak kullanıyorum. 