import HeaderStyle from "../scss/header.module.scss";
//👆 scss içinde olusturdugum renkleri, yazı tiplerini vs geldim burada import ettim. 



const Header = () => {
  return (
    <div className={HeaderStyle.header}>
      <h1>COMMENTS</h1>
    </div>
  );
};

export default Header;
