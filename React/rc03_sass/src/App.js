import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import "./scss/App.scss";
// 👆birleştirmiş oldugum renkleri içeren ve reset klasörümü bunu buraya import ettim 

function App() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
}

export default App;
