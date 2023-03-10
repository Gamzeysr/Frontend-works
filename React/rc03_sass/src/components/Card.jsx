import CartStyle from "../scss/card.module.scss";
//👆 Verimizi bilgileri burada kullanacagımızdan buraya import ettik 



const Card = ({ data }) => {
  // console.log(data);
  return <div className={CartStyle.container}>
    {data.map((item) => {
      // Burada bütün verimi cektim 👆
      const { id, name, job, comment, img } = item;
      // 👆 Buradda da hangi bilgileri kullanacaksam destr yöntemi ile belirttim 
      return (
        <div key={id} className={CartStyle.card}>
          {/* 👆kart için ayrı bir div daha açtık  */}
          <h1>{name}</h1>
          {/* 👆kartın için deki isim için kullandım  */}
          <h2>{job}</h2>
          {/*👆 meslek yazan yer için kullandım  */}
          <p>{comment}</p>
          {/* 👆yorum için kullandım  */}
          <img src={img} alt="img" />
          {/* resim için 👆 */}
          <div className={CartStyle.buttons}>
            {/* Buttonları yan yana koymak için ayrı div olusturdum  */}
            <button className={CartStyle["buttons--small"]}>Small</button>
            <button className={CartStyle["buttons--large"]}>Large</button>
          </div>
        </div>
      );
    })}
  </div >
};

export default Card;
