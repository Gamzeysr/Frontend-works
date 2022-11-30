// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//     case "CLEAR":
//       return initialState;
//     default:
//       return state;
//   }
// };
// export default reducer;

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
