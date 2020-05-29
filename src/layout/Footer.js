import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      style={{backgroundColor:"#121212", color:"#EAF0F1"}}
      className="text-center text-white fixed-bottom p-2"
    >
      <h3>Github App using Firebase</h3>
    </Container>
  );
};

export default Footer;
