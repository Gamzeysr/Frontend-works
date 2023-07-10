// const initialState = {
//   counter: 0,
// };
// ✨Buradan 👇
// const reducer = (state = initialState, action) => {
//? actionun içinde aslında type ve payload vardır. Yani action yerine ✨{type,payload}✨ şeklinde yazılsada olurdu.payload aslında dispatchin gönderdiği veri unutma!!Veri çekecerğimizde payloadıda kullanıyoruz burada veri çekmediğimiz için kullanmadık.
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//?👆 Burada key value mantıgı var ve burada counterımıza erişmek için statet.counterımızı bir artır demiş olduk
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//     case "CLEAR":
//       return initialState;
// ? 👆Burdada counterımızıı sıfıra dedik aslında initialState diyetere counter : 0 da diyebilirdik.Aynı şey.
//     default:
//       return state;
//   }
// };
// export default reducer;
// ✨Buraya kadar reducer ımız oluyor.👆
//? Bu reducer metodumuz içine parametre olarak stateimizi ve actionu alıyor.Sonra bir durum makinesi old için switch case yapısıyla actionların türüne göre karar veriyor.Sonrasında INCREMENT DECREMENT CLEAR isimlerini verdik şimdi bu ICREMENT DECREMENT CLEAR durumlarında statelerimizin durumlarını ayarlayacagız.

//!DİKKAT UNUTMA !! reducer methodu bir state alır bırde o stateleri değiştirecek olan actionları alır.👉const reducer = (state = initialState, action),daha sonrasında actionların içinde ki türlere bakıp

//! Burada reducerlarımızı birleştirip tek bir elden vermemiz gerekiyor.STOORE mantıgını düşün 👇Yani reducerlarımızı combine etmemiz gerekiyor.
//! birden fazla reducer olunca tek bir yerde birleştirmemez gerekiyor.oyüzden baba klasörümüzde birleştiriyoruz.

import { legacy_createStore as createStore, combineReducers } from "redux";
//! 👆store olusturacak kısmı ekledik buraya
//! önceki yaptıgımız işlemde app.jsnin içindeydi oradan sildik buraya ekledik.
//? Sonrasında da iki tane reducerlarımız vardı. onları buraya cagırdık.👇
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
//** Şimdi bu reduxlarımızı birleştiricez.bunu için daha önce görmediğimiz method var ✨combineReducers✨ diye bu objeleri birbirine ekliyor.👇
//** ne kadar reduxumuz varsa onları ekliyoruz ne kadar olursa olsun ekliyecez.✨

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});
//! Şimdi de bu birleştirdiğimiz reducerları store a veriyoruz asagıdaki şekilde  👇
//? createStore diyerek storumuzu olusturduk.bu store da içine rootReducer i alacak
export const store = createStore(rootReducer);
//! Bunu artık ben istediğim yerde kullansbilirim
