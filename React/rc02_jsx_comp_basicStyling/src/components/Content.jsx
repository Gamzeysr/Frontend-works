//* JSX'de stillendirme farklı sekillerde yapılabilir.
//* 1-) harici CSS sayfaları ile (index.css,app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.


//! NOTLAR
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanilmalidir.
//* class isimleri icin className kullabilir.
//* Material UI,Styled Component, Sass, Bootstrap v.b harici kutupganeler kullanilabilir.

//? Harici stillendirme dosyasi
import './Content.css'


//? Dahili bir resim eklemek icin import yapmak gereklidir.
import img2 from "./img/sirin.png";


const Content = () => {
    //* JS alanı
    const imgStyle = {
        display: "block",
        width: "300px",
        margin: "1rem auto"
    };
    return (
        //* JSX alanı
        <div>
            {/* İnline Style  */}
            <h2 style={{ color: "green ", fontSize: "5pc" }}>React JSX</h2>
            <p style={{ color: "grey", fontSize: "50px" }}>React, Kullanici arabirimi tasarlamak icin kullanilan bir JS kütüphanesidir. </p>
            <img
                style={imgStyle}
                src="https://static4.depositphotos.com/1000604/321/i/450/depositphotos_3219795-stock-photo-meadow-blue-flowers.jpg" alt="img1" />
            <img style={imgStyle}
                src={img2} alt="img2" />
            <p className='par-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quo ipsam, explicabo natus beatae, suscipit, nobis vel ipsum delectus pariatur quasi illum ea fuga omnis numquam odit ab sapiente. Nulla laborum iusto eius, quidem inventore aliquam rem eaque earum minus.</p>
        </div>
    );
};
export default Content;