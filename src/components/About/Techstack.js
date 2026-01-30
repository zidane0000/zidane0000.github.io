import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLua,
  SiMicrosoftazure,
  SiGooglecloud,
  SiPostgresql
} from "react-icons/si";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="go" />
        <div className="tech-icons-text">Go</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLua fontSize={"24px"} />
        <div className="tech-icons-text">Lua</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure fontSize={"24px"} />
        <div className="tech-icons-text">Azure</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud fontSize={"24px"} />
        <div className="tech-icons-text">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
