import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Dave Lin (JHE-LI)</span>{" "}
            from <span className="purple">Taipei, Taiwan</span>.
            <br />
            I'm a <span className="purple">Backend Engineer</span> with 4 years of experience
            in <span className="purple">Cloud Infrastructure and Client-Side Systems</span>.
            <br />
            I specialize in designing secure, high-performance solutions that run reliably across{" "}
            <span className="purple">AWS/Azure/GCP</span> and{" "}
            <span className="purple">Windows/Linux</span> environments.
            <br />
            <br />
            My expertise covers two distinct domains:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Client-Side Engineering:</strong> Agent reliability and resilient update strategies.
              Engineered ring-based deployment controls that drove 25x adoption growth.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Cloud-Side Engineering:</strong> Serverless solutions with 99.99% uptime.
              Build high-availability systems for global operations across 27 regions.
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            I hold an <span className="purple">M.S. in Computer Science</span> from{" "}
            <span className="purple">National Taipei University of Technology</span>.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Break out of comfort zone and embrace new challenges!"{" "}
          </p>
          <footer className="blockquote-footer">Dave</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
