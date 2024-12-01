import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/_9d90825c-1ef0-4884-8880-95875c30e082.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import i from "../assets/img/i.svg";
import logo1 from "../assets/img/logo.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/akshaya-priya-"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://wa.me/qr/P5IYFJBFN5MPC1 "><img src={whatsapp} alt="Icon" /></a>
              <a href="mailto:akshayajanarthareddy@gmail.com"><img src={i} alt="Icon" /></a>
              <a href="https://www.instagram.com/akshzz_reddy"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/akshayajanarthan"><img src={logo1} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
