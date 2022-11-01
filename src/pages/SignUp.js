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
                  <div onClick={() => navigate(-1)} className="back">
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
                <div className="heading">Sign up</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="para">
                  Become a partner of {brandName} and let's revolutionize the
                  way of transportation
                </div>
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
                  <div className="password_message">
                    At least 8 characters, 1 number, 1 uppercase letter, 1
                    lowercase letter, one special character
                  </div>
                  <input
                    className="input"
                    type="password"
                    placeholder="Repeat Password*"
                  />
                  <div className="termsAndCon">
                    By signing up, you agree to our <a href="#">Terms of Use</a>{" "}
                    and <a href="#">Data Protection Policy</a>
                  </div>
                  <button>Continue</button>
                  <div className="alreadyAUser">
                    Already have an account? <Link to="/login">Log in</Link>
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
