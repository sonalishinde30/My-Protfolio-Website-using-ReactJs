import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Ensure Bootstrap is imported
import { Typography, Chip, Stack, Box } from '@mui/material'; // Material-UI components
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'; // MUI Lab components
import { AccessTime } from '@mui/icons-material'; // Icon for timeline
import Particle from '../Particle'; // Importing the Particle component for the background

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Lets Grow More',
    duration: '01/2022 – 02/2022',
    location: 'Pune',
    skills: ['Responsive Website', 'Frontend Programming', 'Online Classroom System'],
  },
  {
    title: 'Web Development Intern',
    company: 'Exposys Data Labs',
    duration: '12/2021 – 01/2022',
    location: 'Pune',
    skills: ['Virtual Internship', 'Creative Web Pages', 'Online Learning Platform'],
  },
];

const ExperienceTimeline = () => {
  return (
    <section>
      <Container fluid style={{ padding: '150px 0' }} id="experience" className="experience-section">
        <Particle />
        
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: 'center', paddingBottom: '50px' }}>
              <h1 className="experience-heading">
                <span style={{ color: "white" }}>Professional</span>{" "}
                <strong className="purple">Experience</strong>
              </h1>

              <p style={{ color: "white" }}>
                Here are a few companies I've worked with.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Timeline position="alternate">
                {experiences.map((exp, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="primary">
                        <AccessTime />
                      </TimelineDot>
                      {index < experiences.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>

                    <TimelineContent>
                      <Box 
                        className="experience-card" // Apply class for the card
                        style={{ marginBottom: '30px' }} // Keep marginBottom for spacing between cards
                      >
                        <Typography className="experience-location">
                          {exp.location}
                        </Typography>

                        <Typography className="experience-title">
                          {exp.title}
                        </Typography>

                        <Typography className="experience-company">
                          {exp.company}
                        </Typography>

                        <Typography className="experience-duration">
                          {exp.duration}
                        </Typography>

                        <Stack direction="row" spacing={1} style={{ flexWrap: 'wrap' }}>
                          {exp.skills.map((skill, skillIndex) => (
                            <Chip 
                              key={skillIndex} 
                              label={skill} 
                              variant="outlined" 
                              className="skill-chip" // Apply class here
                            />
                          ))}
                        </Stack>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default ExperienceTimeline;
