
import Buton from "../buton/Buton";
import CardStyle from './card.module.css';



const Card = ({ language, btn, img }) => {
    // console.log({props});
    return (
        <div  >
            <h1 className={CardStyle["title"]}>{language}</h1>
            <img className={CardStyle["images"]} src={img} alt="img" />


            <Buton btn={btn} />
        </div>
    );
};

export default Card;
