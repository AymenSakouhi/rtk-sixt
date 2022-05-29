import { Container, Navbar } from "react-bootstrap";
import mainLogo from "../images/logo.png"

const NavBar = () => {
  return (
    <>
  <Navbar bg="white" variant="dark">
    <Container>
      <Navbar.Brand href="">
        <img
          alt="logo"
          src={mainLogo}
          width=""
          height="40"
          className="d-inline-block align-top"
        />{' '}
      
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
  );
};

export default NavBar;
