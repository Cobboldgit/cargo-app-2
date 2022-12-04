import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/signUp.css";
import { brandName } from "../App";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      style={{
        height: "100vh",
      }}
    >
      <Row
        style={{
          height: "100vh",
        }}
      >
        <Col className="leftSide">
          <div className="top">
            <div className="brand">{brandName}</div>
            <div className="text">
              <span>Welcome to </span>
              <br />
              <span>{brandName}</span>
              <br />
              lorem the is to come nad code to cafe sde sate is to come go there
              and is my friend mom augustine typing verpy fast and ok
            </div>
          </div>
          <div className="image_container">
            <img src="../../images/vint-truck.png" className="image" />
          </div>
        </Col>
        <Col className="rightSide">
          <Container>
            <Row>
              <Col>
                <div className="top">
                  <div className="back">
                    <span class="material-symbols-outlined">
                      arrow_back_ios
                    </span>
                    <div className="text">Back</div>
                  </div>
                  <div className="brand">brand</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="heading">Log in</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="para">Welcome back</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <form className="form">
                  <input className="input" type="email" placeholder="Email*" />
                  <input
                    className="input"
                    type="password"
                    placeholder="Password*"
                  />
                  <button>Continue</button>
                  <div className="alreadyAUser">
                    Don't have an account? <Link to={"/signup"}>Sign up</Link>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
