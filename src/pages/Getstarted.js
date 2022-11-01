import React from "react";
import { Col, Container, Nav, Navbar, Row, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { brandName } from "../App";
import Getstartedbtn from "../components/Getstartedbtn";
import "../css/getStarted.css";

function Getstarted() {
  return (
    <div className="getStarted">
      {/* hero section  */}
      <div className="hero_section">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">{brandName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="button_container" id="basic-navbar-nav">
              <Nav className="nav_link">
                <Link to="signup">
                  <Getstartedbtn />
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="bg"></div>
        <Container>
          <Row className="hero_main">
            <Col sm="6" className="image">
              {/* <img src="../images/truck.png" /> */}
              <Image src="../images/truck.png" />
            </Col>
            <Col sm="6" className="text">
              <div>Do you want a vehicle to carry your things ?</div>
              <div>
                Then Frakt is your solution.Hire any vehicle.Easy to get.
                affordable
              </div>
              <Link to="signup">
                <Getstartedbtn />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      {/* hero section end  */}

      {/* why use  */}
      <div className="why">
        <Container>
          <Row className="heading_container">
            <Col>
              <div className="heading">Why use {brandName}</div>
            </Col>
          </Row>
          <Row>
            <Container className="d-flex justify-content-center">
              <Row>
                <Col>
                  <Card style={{ width: "24rem" }}>
                    <Card.Img variant="top" src="../images/time.png" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "24rem" }}>
                    <Card.Img variant="top" src="../images/switch.png" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="btn_container">
            <Col>
              <Link to="signup">
                <Getstartedbtn />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      {/* why use end*/}

      {/* Partners   */}
      <div className="partners_container">
        <Container>
          <Row>
            <Col>
              <div className="heading">Partnership</div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </div>
            </Col>
          </Row>

          <Row className="btn_container">
            <Col>
              <Link to="signup">
                <button className="getStartedbtn">Sign up now!</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Partners end   */}
    </div>
  );
}

export default Getstarted;
