
import Buton from "../buton/Buton";
import CardStyle from './card.module.css';


//! props ile verilerimizi yakalamak için bu sekilde yapıcaz 👇
// import React from 'react'

// const Card = (props) => {
//     console.log(props);
//     const { language, btn, img } = props;
//     return (
//         <div>Card</div>
//     )
// }
// export default Card


const Card = ({ language, btn, img }) => {
    //!👆  appden gelen verilerimizi burada yakaladık.Bu yöntemin adı havada destr.
    // console.log({props});

    return (
        <div  >
            <h1 className={CardStyle["title"]}>{language}</h1>
            <img className={CardStyle["images"]} src={img} alt="img" />


            <Buton btn={btn} />
            {/* 👆Burada ki verimi Buton.jsx ine gönderdiğimden bu sekilde yaptım burayı  */}
        </div>
    );
};

export default Card;
