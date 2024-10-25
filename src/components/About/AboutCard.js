import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, My name is <span className="purple">Sonali Prakash Shinde </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I have completed  my Bachelor's Degree In Electronics and Telecommunication From JSPM's Jayawantrao Sawant College of Engineering, Hadapsar Pune .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>

            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
