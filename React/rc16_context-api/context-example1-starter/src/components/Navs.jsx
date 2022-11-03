import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Navs() {
  //! Consuming 
  const { user, setUser } = useContext(LoginContext);
  //☝ Burada User bilgisini contextden cektim ve ben bu bilgiyi şimdi kullanıcam.Sadece useri cekeblirim bu sekilde 
  // Bu cektiğim bilgiyi login de kullanacagım için login yazsı neyin içindeyse oraya gidip kullanıcam.
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-1024x265.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {/* 👇Burada consuming yaparak verimizi burada kullancaz şimdi dedik ki Login kısmında email yoksa Login yazsın eger email varsa Logout yazsın dedik */}

            {!user.email ? (
              <Link className="nav-link" to="/login">
                Login </Link>) : (
              <Link
                // burada bunu yaparak inputta ki verilerimizi silmeyi sağladık 👇
                // baska home sayfasına tıklayınca about sayfasına tıklayınca verilerimiz silinmiş oluyor bu sekilde 
                onClick={() => setUser({ email: "", password: "" })}
                className="nav-link" to="/login">
                Logout
              </Link>
            )}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
