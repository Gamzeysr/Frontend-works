import Card from "./component/card/Card";
import data from "./util/data";
// datayı da import ettik cünkü datamızı buraya cekme işlmi yapabilmek için yaptık 
// Card en son oldugu için parent olayından dolayı burada card ı import ettik 



function App() {
  //JS alanı
  return (
    //!JSX alanında yapıyoruz dikkat et 
    <>
      {/* JSX alanında işlem yaptıgımız için süslü parantez içine alıyoruz javascript klodunu */}
      {/* arrow func da unutma ittemden sonra süslü varsa return vardır. */}
      {data.map((item) => {
        console.log(item);
        const { id, language, img, btnName } = item; //!destr.
        return <Card key={id} language={language} img={img} btn={btnName} />;
      })}
    </>
  );
}
// Burada map fonk ile dedikki datamnın içinde ki verileri al her birini lazım olanlar bana destr yaptık isimlerini verdik bunları getir didedik 
export default App;

// key={id} yazmamızın sebebi hata almamak içinm id olmasaydı bu sefer index yazıp key={index } yazardık console da hata almamız için.