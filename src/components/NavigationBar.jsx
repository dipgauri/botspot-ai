import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Button,
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {

  const [isScreenSize, setIsScreenSize] = useState(false);
  const matchScreenSize = useMediaQuery({ query: `(max-width: 480px)` });
  useEffect(() => {
    matchScreenSize? setIsScreenSize(true):setIsScreenSize(false)
  })
  let style ={ display:'none'}
  if(isScreenSize){
     style.display = 'inline-block'
}
 
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className="nav-css"
      >
        <Container>
          <Navbar.Brand href="#">
            <span className="nav-title">BOTSPOT AI</span>
          </Navbar.Brand>
          <Nav style={style}>
            <FontAwesomeIcon
              color="#ffffff"
              icon={faPhoneAlt}
              style={{ width: "20px", height: "20px" }}
            />
            <FontAwesomeIcon
              color="#ffffff"
              icon={faSearch}
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                right: "90px",
              }}
            />
          </Nav>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="text-white ml-4" href="#">
                Contact Us{" "}
              </Nav.Link>
              <Form className="d-flex">
                <FormControl
                  style={{ borderRadius: "20px" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="nav-search-button">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
