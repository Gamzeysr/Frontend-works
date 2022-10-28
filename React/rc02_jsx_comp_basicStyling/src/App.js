// import logo from './logo.svg';
import './App.css';



//? React,JSX kullanmaktadir.
//? JSX'de, HTML elementleri dogruudan JS icerside kullanılabilir

//! Componentler, HTML,CSS ve JS kodlarından meydana gelmiş bir kod parçacığıdır.
//! Bir componentin return () kismi ise JSX kodlaeını içerir
//! JSX'in kendine göre bazi kurallari vardir.Örneğim; bir component eger birden fazla html elementş dondurmesş gerekirse bunları tek bir container elemenai ile sarmallayarak dondurmelidir container için div,article,header,<> v.b herhangi bir element kullanilabilir.

//? App componentinin function declaration ile tanimlanmasi
function App() {
    return (
        //* JSX
        //? stillendirme yapilmayacaksa container icin <> kullanilabilir
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}

export default App;

