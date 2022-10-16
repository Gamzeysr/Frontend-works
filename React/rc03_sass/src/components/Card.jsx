import CartStyle from "../scss/card.module.scss";
import data from "../data";


const Card = () => {
  // console.log(data);
  return <div className={CartStyle.container}>
    {data.map((item) => {
      const { id, name, job, comment, img } = item;
      return (
        <div key={id} className={CartStyle.card}>
          <h1>{name}</h1>
          <h2>{job}</h2>
          <p>{comment}</p>
          <img src={img} alt="img" />
          <div className={CartStyle.buttons}>
            <button className={CartStyle["buttons--small"]}>Small</button>
            <button className={CartStyle["buttons--large"]}>Large</button>
          </div>
        </div>
      );
    })}
  </div >
};

export default Card;
