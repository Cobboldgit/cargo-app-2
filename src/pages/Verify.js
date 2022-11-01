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
                <div className="heading">Email verification</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="para">
                  Confirm your email by typing the 6-digit verification code
                  sent to your email address.
                  <div>Please check your inbox</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <form className="form">
                  <input
                    className="input"
                    type="text"
                    placeholder="Input your verificaton code*"
                  />
                  <button>Submit</button>
                  <div className="alreadyAUser">
                    Didn't recieve a code? <a href="#">Resend Code</a>
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
