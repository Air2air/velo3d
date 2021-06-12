import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import "./styles.scss";

function Header() {
  return (
    <Navbar fixed="top" className="p-0 d-flex justify-content-between mb-5">
      <Container>
        <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
          <img src="/images/logo.svg" alt="Velo 3D" />
          <span className="mx-2 align-self-end">
            Assure
            <span className="tm mx-1">&trade;</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/">Tool Health</Nav.Link>
          <Nav.Link href="/">Consumables</Nav.Link>
          <Nav.Link href="/">Tool Updates</Nav.Link>
          <Nav.Link href="/">
            <FaUserAlt size="1.4em" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
