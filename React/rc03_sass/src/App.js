import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import "./scss/App.scss";
// 👆birleştirmiş oldugum renkleri içeren ve reset klasörümü bunu buraya import ettim 

import data from "./data";

function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  );
}

export default App;
