import FooterStyle from "../scss/footer.module.scss";
// 👆kullandıgım sekilleriş footer.module de burada kullandım.
const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <p className={FooterStyle.title}>Copyright by Clarusway {new Date().getFullYear()}</p>
      {/* {new Date().getFullYear()} yazarak da yılı her zaman güncel tutmayı sağlıyoruz  */}
    </div>
  );
};

export default Footer;
