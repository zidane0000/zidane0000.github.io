import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import deepSecurity from "../../Assets/Projects/deep-security.png";
import cloudAccount from "../../Assets/Projects/cloud-account.png";
import socialPosts from "../../Assets/Projects/social-posts.png";
import aiInterview from "../../Assets/Projects/ai-interview.png";
import fileStorage from "../../Assets/Projects/file-storage.png";
import multiTaskLearning from "../../Assets/Projects/multi-task-learning.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiInterview}
              isBlog={false}
              title="AI Interview Platform"
              description="Full-stack AI-powered interview platform with BYOK (Bring Your Own Key) support. Monorepo combining Go backend and React/TypeScript frontend. Supports OpenAI, Gemini, Groq, and any OpenAI-compatible API. Features real-time conversational interviews, detailed AI evaluations, and multi-language support (English/Chinese)."
              ghLink="https://github.com/zidane0000/ai_interview_platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiTaskLearning}
              isBlog={false}
              title="Multi-Task Learning (MT)"
              description="Machine learning project implementing multi-task learning techniques. Explores advanced ML concepts and architectures for handling multiple related tasks simultaneously to improve model efficiency and performance."
              ghLink="https://github.com/zidane0000/MT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialPosts}
              isBlog={false}
              title="AI Social Posts Generator"
              description="Leverages Generative AI to automatically create engaging social media posts for platforms like Facebook and Instagram. Helps content creators and marketers generate high-quality posts efficiently using advanced language models."
              ghLink="https://github.com/zidane0000/posts_generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepSecurity}
              isBlog={false}
              title="Deep Security Agent"
              description="Architected a reusable agent messaging layer at Trend Micro, eliminating duplicate integration work across 7+ plugins and reducing future integration effort from weeks to minutes. Deployed across 30+ operating systems serving 0.7M+ agents."
              demoLink="https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fileStorage}
              isBlog={false}
              title="Trend Micro Cloud One™ – File Storage Security"
              description="Cloud-native security for cloud object storage. Scans files in AWS S3, Azure Blob, and Google Cloud Storage for malware and malicious content. Ensures data safety and compliance in cloud-native applications with automated, event-driven scanning."
              demoLink="https://www.trendmicro.com/zh_tw/business/products/hybrid-cloud/cloud-one-file-storage-security.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudAccount}
              isBlog={false}
              title="Cloud Account Management"
              description="Integrated credentials across multiple services to unify customer management at Trend Micro. Achieved over 5.4M invocations with fewer than 5 errors per month per region across 27 regions, providing robust identity and access management for cloud security."
              demoLink="https://www.trendmicro.com/cloudoneconformity/cloud-account-management"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;