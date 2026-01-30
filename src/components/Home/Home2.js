import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Backend Engineer with 4+ years of experience building
              secure, high-performance solutions that run reliably across
              cloud and client environments.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  C++, Go, Lua, and Python{" "}
                </b>
              </i>
              and have deployed applications across 30+ operating systems,
              from Windows to Unix.
              <br />
              <br />
              My expertise spans
              <i>
                <b className="purple">
                  {" "}
                  Cloud Infrastructure (AWS, Azure, GCP){" "}
                </b>
              </i>
              and
              <i>
                <b className="purple">
                  {" "}
                  Client-Side Systems{" "}
                </b>
              </i>
              with a focus on reliability and scalability.
              <br />
              <br />
              Recently, I've been building
              <b className="purple"> AI-powered applications </b> using{" "}
              <i>
                <b className="purple">Go</b> and{" "}
                <b className="purple">React/TypeScript</b>
              </i>
              , combining my backend expertise with modern technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
