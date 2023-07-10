import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //! local state
  // const [user, setUser] = useState({ email: "", password: "" });
  //TODO👆 bu local stateimi artık App.js de sarmalladım ve global state yaptgım için local stateimi kullanmıyorum gelen verilerimi artık global state e atıyorum.

  //!3- Consuming LoginContext
  // Bu kısım artık tüketme SON AŞAMA 👇
  const { user, setUser } = useContext(LoginContext);
  //TODO local state yerine artık bu consuming yapıyorum.
  //TODO👆 LoginContextden user ve setUser verilerimi oku veya yaz demiş oluyorum.

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  // ☝Burada navigate(-1) kullanmamızın sebebi : Kullanıcı login yapmadan people a girmiş olabilir. Ve eger kişiyi istediğimiz sayfaya yönlendirmemiz gerekir. Aslında istediği sayfa people sayfasıydı oraya Login girdi. Oyüzden -1 e yönlendirerek people a gitmesiniz sağladık.
  // Yani peopla tıklayınca da Login sayfasına gidecek resimlere ulaşmak için Peoplein bir öncesinde de Login var o yüzden -1 dedik

  // console.log(user);
  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
