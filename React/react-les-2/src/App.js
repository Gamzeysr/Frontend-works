// import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Content from "./components/Content"
import Header from './components/Header';


//? React,JSX kullanmaktadir.
//? JSX'de, HTML elementleri dogruudan JS icerside kullanılabilir

//! Componentler, HTML,CSS ve JS kodlarından meydana gelmiş bir kod parçacığıdır.
//! Bir componentin return () kismi ise JSX kodlaeını içerir
//! JSX'in kendine göre bazi kurallari vardir.Örneğim; bir component eger birden fazla html elementş dondurmesş gerekirse bunları tek bir container elemenai ile sarmallayarak dondurmelidir container için div,article,header,<> v.b herhangi bir element kullanilabilir.


function App() {
  return (
    <>

      <Header />
      <Content />
      <Footer />
    </>
  );
}
export default App;