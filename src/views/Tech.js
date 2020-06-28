import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TECH, PEOPLE_I_FOLLOW, PROJECT_I_FOLLOW } from '../config/AppConstants';
import GridLoader from '../images/GridLoader';

// ---------- Image ----------

const StyledTechImage = styled.img`
  height: 75px;
  width: auto;
  margin: 10px;
`;

const StyledGridLoaderWrapper = styled.div`
  height: 75px;
  width: auto;
  margin: 10px;
`;

const Image = ({ imgName }) => {
  const [image, setImage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetchImg = async () => {
      const { default: src } = await import(`../images/${imgName.toLowerCase().replace(/\s/g, '')}.png`);
      setImage(src);
      setIsLoaded(true);
    };
    fetchImg();
  }, [imgName]);

  return isLoaded ? (
    <StyledTechImage src={image} alt={imgName} />
  ) : (
    <StyledGridLoaderWrapper>
      <GridLoader isVisible={!isLoaded} size={'50px'} />
    </StyledGridLoaderWrapper>
  );
};

// ---------- End Image ----------

// ---------- People I Follow ----------

const StyledLink = styled.a`
  text-decoration: none;
  color: #333333;
  &:hover {
    text-decoration: none;
    color: #4949f3;
  }
`;

const StyledPeopleWrapper = styled.div`
  display: flex;

  flex-direction: row;
  width: 50%;
  padding: 15px;
`;

const StyledPeopleImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-right: 15px;
`;

const PeopleIFollow = ({ person }) => (
  <StyledPeopleWrapper>
    <StyledPeopleImg src={person.image} alt={person.name} />
    <div>
      <div>{person.name}</div>
      <StyledLink href={person.github}>{person.github}</StyledLink>
    </div>
  </StyledPeopleWrapper>
);
// ---------- End People I Follow ----------

// ---------- Projects I Follow ----------
const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 15px;
`;

const ProjectAuthor = styled.span`
  font-size: 0.85rem;
  font-weight: 300;
  margin-left: 15px;
`;

const ProjectIFollow = ({ project }) => (
  <StyledProjectWrapper>
    <div>
      {project.name}
      {project.author && <ProjectAuthor>({project.author})</ProjectAuthor>}
    </div>
    <StyledLink href={project.github}>{project.github}</StyledLink>
  </StyledProjectWrapper>
);

// ---------- End Projects I Follow ----------

const StyledTechWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 20px;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  border-radius: 8px;
  padding: 10px;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 3rem;
  font-family: 'MuseoModerno', cursive;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #a1a7d8;
`;

export default function Tech() {
  return (
    <StyledTechWrapper>
      <div>
        <Label>Technologies I Use</Label>
        <Wrapper>{TECH.map((tech) => tech.name && <Image imgName={tech.name} key={tech.name} />)}</Wrapper>
      </div>
      <div>
        <Label>People I Follow</Label>
        <Wrapper>
          {PEOPLE_I_FOLLOW.map((person, i) => (
            <PeopleIFollow person={person} key={i} />
          ))}
        </Wrapper>
      </div>
      <div>
        <Label>Projects I Follow</Label>
        <Wrapper>
          {PROJECT_I_FOLLOW.map((project, i) => (
            <ProjectIFollow project={project} key={i} />
          ))}
        </Wrapper>
      </div>
    </StyledTechWrapper>
  );
}
