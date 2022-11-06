import ButonStyle from './buton.module.css';
// Buton css i kullancagım için ekrana bastıracak oldugum bu dosya oldugundan  oldgum dosyada burada import ettim .
// Css de bu sekilde oluyor 

const Buton = ({ btn }) => {
    //👆data mın içinde her bir verimin butonu farklıbutonlar oldugundan buttonumu buraya cagırdım props ile su anda bu sekilde verimi almış oldum.
    return (
        <div className={ButonStyle.title}>
            <button>{btn}</button>
            {/* 👆app.js içindeki cekmiş oldugum buton veriyi bu componente ekrana rendr ettim  */}
        </div >
    );
};

export default Buton;
