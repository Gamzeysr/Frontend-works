import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import PrivateRouter from "./pages/PrivateRouter";

//! 2. aşama Sarmallama aşaması
function App() {
  const [user, setUser] = useState("");

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          {/* 👇Burada PrivateRouter diyecerek ilk önce sayfa tıklandıgında privater roter contentine git sen bi süzgeçten geçir ondan sonra Peopla gec dedik. */}
          {/* Yani PrivateRouer yazıp </Route> ile kapatarak people imizı sarmallamış olduk.canlıdada kullanıcı people tıklayınca direk resimler gelmeyecek ilk önce bir PrivateRouter.jsx componentinden geçip sonra resimler gelecek  */}

          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>
          {/* Absolute path kullanmadıgımız için önce people dedik sonra */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    // </LoginContext.Provider>
  );
}

export default App;
