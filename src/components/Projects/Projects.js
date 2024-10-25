import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shooping from "../../Assets/Projects/ecommerce.jpg";
import snakegame from "../../Assets/Projects/Snakes.jpg";
import restaurant from "../../Assets/Projects/food.jpg";

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
              imgPath={snakegame}
              title="Interactive Classic Snake Game using Java"
              description="A Classic Snake Game using Java Swing offers the traditional snake gameplay, where the player controls a snake to eat apples. The game features interactive graphics with Swing and includes sound effects for actions like eating apples and game over. It has dynamic movement, collision detection, scoring, and game-over logic for an engaging experience."
              ghLink="https://github.com/sonalishinde30/Snake-Game-Using-java.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shooping}
              title="E-Commerce Website using JSP Servlet "
              description="The E-Commerce platform offers a wide range of products, providing a smooth shopping experience. It features user-friendly interfaces for browsing, managing the shopping cart, and completing checkout efficiently. With a responsive design, the platform ensures that customers can shop seamlessly on any device, from phones to desktops."
              ghLink="https://github.com/sonalishinde30/E-commerce-Website.git"                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              title="Restaurant Website using ReactJS"
              description="The React.js Restaurant Website is a modern, responsive web application designed for restaurants. Built with React.js and Material-UI, it features essential pages like home, menu, about us, and contact. The clean interface allows users to browse menus, view details, and possibly place orders or reservations for a smooth experience."
              ghLink="https://github.com/sonalishinde30/Restaurant_Website_Using_ReactJS.git"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
