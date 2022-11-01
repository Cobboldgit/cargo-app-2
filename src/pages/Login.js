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
        <Col className="leftSide"></Col>
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
