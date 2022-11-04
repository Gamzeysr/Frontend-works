import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  // const [user, setUser] = useState({ email: "", password: "" });

  //! consuming aşaması 
  const { user, setUser } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(user);
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
            // UNdefined almamazıın sebebi buradaki valuenin içindeki objelerin undefined gelmesi , undefined gelmesinin sebebi ise nested yapısındaki objelerin içinin boş gelmesi ve bu undefined gelmemesi için value={user?.email ||""} yap. diyerek undefned gelmesini hata vermesini engelliyoruz
            value={user?.name || ""}
            // ☝Bu demek oluyor ki artık bu user?.emailden undefined geliyorsa sen string gönder diyorz ve hatanın önüne geçmiş oluyoruz bu sekilde
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
