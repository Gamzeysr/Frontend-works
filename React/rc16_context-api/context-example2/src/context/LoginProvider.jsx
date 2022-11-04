import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

//! 1-) Creating Login Context
export const LoginContext = createContext();

//! 2-) Providing
const LoginProvider = ({ children }) => {
  // props.children
  const [user, setUser] = useState({ email: "", password: "" });

  const values = { user, setUser };
  //☝ statelerim  burada iki tane var ve daha sonrasında daha fazla olabilir bunun için bize kolaylık olsunn diye vulues adında bir değişkene atadık bunları 
  // ve artık bu valuesları valuenin içine gönderebilirim
  // DiKKAT:DEĞİŞKEN seklinde gönderilen olunca kullanırken süslü paranteze alıyoruz unutma !! , FONNKSYİON OLUNCA () Sonua parantez koyarak kullanıyoruz .
  return (
    <LoginContext.Provider value={values}>
      {children}
    </LoginContext.Provider>
  );
};
// ☝Bu sarmalladıogmız children her componentin içinde olan bi şey .

//! Consuming Custom Hook
export const useLoginContext = () => {
  return useContext(LoginContext);
};
//DİKKAT:Hookların ismi use ile baslamak zorunda yoksa hata verir

export default LoginProvider;
