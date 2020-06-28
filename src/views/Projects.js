import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { PROJECTS } from '../config/AppConstants';

const StyledCard = styled(Card)`
  width: 18rem;
  margin: 10px;
  box-shadow: 0px 40px 72px -40px rgba(158, 158, 158, 0.66);
  border-radius: 8px;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 56px 50px -30px rgba(150, 149, 149, 0.66);
    cursor: pointer;
  }
`;

const ProjectItem = ({ project: { name, description, mainImg, allImages } }) => (
  <StyledCard>
    <Card.Img variant="top" src={mainImg} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </StyledCard>
);

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 3rem;
  font-family: 'MuseoModerno', cursive;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #a1a7d8;
`;

export default function Projects() {
  return (
    <div>
      <Label>Projects</Label>
      <ProjectWrapper>
        {PROJECTS.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </ProjectWrapper>
    </div>
  );
}
