
//👇1 stateleri burada birleştirip obje haline getirioyuz
// bu stateleri useReducerExample.jsx componentinden aldık 
export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};
// 2 👇 sonrasında reducer fonk yazıyoruz .
// (state, action) ile içinede stateler alıyoruz sonra action ile o statleri değişltirececek olan actionları alıyoruz 
export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    //☝ Burada dedim ki state i aç baslangınta false olan loading state mi true ya kur dedim 

    case "SUCCESS":
      return { ...state, catImage: action.payload, error: "", loading: false };
    // Başarılı bitince ne oluyor ona bakıyorum UseStateExample.js den baktım orada ki UseStateExample.js de SUcces olunca veriyi cekip setErroru siliyoruz burada ki succes da onu yapıcaz
    //! DİKKAT! Veriyi cekicip kullanacaksak hep action olanın üzerinden kullanıyoruz unutma!!! 


    case "FAIL":
      return { ...state, catImage: "", error: action.payload, loading: false };
    // fAIL Olursa image siliniyor o yüzden catImage:"" , error:action.payload olmasının sebebi error verisini çekmesinden dolayı loading de aynı sekilde falselanıyor o yüzden 
    default:
      break;
  }
};

// ☝ Burada stateleri start oldugunda sunu yap, succes oldugunda sunu yap, fail oldugunda sunu yap dedik aslında 