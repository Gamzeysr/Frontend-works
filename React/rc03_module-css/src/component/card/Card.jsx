
import Buton from "../buton/Buton";
import CardStyle from './card.module.css';



const Card = ({ language, btn, img }) => {
    // console.log({props});
    return (
        <div className={CardStyle.title} >
            <h1 >{language}</h1>
            <img className="images" src={img} alt="img" />


            <Buton btn={btn} />
        </div>
    );
};

export default Card;
