import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
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

const ProjectItem = ({ project: { name, description, mainImg }, onOpenModal }) => (
  <StyledCard onClick={() => onOpenModal(name)}>
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
  const [isOpen, setIsOpen] = useState(false);
  const [projectInModal, setProjectInModal] = useState({});
  const onOpenModal = (projectName) => {
    const project = PROJECTS.find((proj) => proj.name === projectName);
    setIsOpen(true);
    console.log(project);
    setProjectInModal(project);
  };
  const closeModal = () => {
    setIsOpen(false);
    setProjectInModal({});
  };
  return (
    <div>
      <Label>Projects</Label>
      <ProjectWrapper>
        {PROJECTS.map((project, i) => (
          <ProjectItem key={i} project={project} onOpenModal={onOpenModal} />
        ))}
      </ProjectWrapper>
      <ProjectModal isOpen={isOpen} project={projectInModal} handleClose={closeModal} />
    </div>
  );
}

const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 1000px;
  }
`;

const Tech = styled.span`
  background-color: #13232f;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`;

const TechWrapper = styled.div`
  margin: 15px 0;
`;

const ModalInfo = styled.div`
  display: flex;
  padding: 20px 5px;
  flex-direction: column;
`;

const ProjectModal = ({
  project: { name, description, technology = [], allImages = [] },
  isOpen = false,
  handleClose,
}) => {
  return (
    <>
      <StyledModal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {allImages.map((img, i) => (
              <Carousel.Item key={i}>
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
          <ModalInfo>
            <div>{description}</div>
            <TechWrapper>
              {technology.map((tech) => (
                <Tech>{tech}</Tech>
              ))}
            </TechWrapper>
          </ModalInfo>
        </Modal.Body>
      </StyledModal>
    </>
  );
};
