import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: [{ id: new Date().getTime(), text: "Work hard", completed: true }],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      //! ADD_TODO geldiğinde bizim statimiz returnnun içinde ki gibi değişmesi gerekiyor.
      return {
        //? Bu returnun yanında ki süsülü biz todoListin yanında yeni bir obje döndüreceğimiz için returnun yanında ki süslü. 
        todoList: [
          ...state.todoList,
          //? statin içinde old için todoList ilk önce state e erişip sonrasında todoListe erişebilecegımız için ✨...state.todoList✨ yaptık . ve ekleme yapacagımız için üç nokta koyduk statein basına 
          { id: new Date().getTime(), text: payload, completed: false },
          //! Bu süslü parantez içindeki kısım da yeni ekleyecek oldugum veri.Bu yeni objenin verisi payloaddan geliyor.
        ],
        //!👆Buradaki amacımız kullanıcı add butonuna bastıgında bu gelen veriyi todoListe ekleyoruz 
      };
    case DELETE_TODO:
      return { ...state, ...payload };
    case TOGGLE_TODO:
      return { ...state, ...payload };
    case CLEAR_TODO:
      return initialState;
    default:
      return state;
  }
};
export default todoReducer;


//!!!🏄‍♂️🏄‍♂️ Bu reducer kısmı bizim statelerimizi değiştirdiğimiz kısım 🏄‍♂️
//! stateleri değişimin i nasıl istiyorsak o sekilde ayarladıgımız kısım.
//* Bu ADD_TODO da kullanıcı verileri girince bu sekilde olsun dedik.Onu ayarladık 
