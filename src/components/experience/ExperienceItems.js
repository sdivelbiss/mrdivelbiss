import React, { Fragment } from 'react';
import styled from 'styled-components';
import { EXPERIENCE } from '../../config/AppConstants';

const StyledExperienceItem = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  column-gap: 10px;
  border: 1px solid #dadaf8;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  transition: 0.5s all;
  &:hover {
    background-color: #dadaf8;
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0px 56px 50px -30px rgba(150, 149, 149, 0.66);
  }
`;
const LeftSide = styled.div``;
const RightSide = styled.div``;
const Company = styled.div`
  font-weight: 600;
`;
const Title = styled.div`
  border-bottom: 1px solid #a1a7d8;
  width: max-content;
`;
const Description = styled.div``;
const Date = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 0.85rem;
`;
const StartDate = styled.div``;
const EndDate = styled.div``;
const Location = styled.div`
  font-weight: 300;
  font-size: 0.85rem;
`;

const ExperienceItem = ({ exItem: { company, title, description, startDate, endDate, location } }) => (
  <StyledExperienceItem>
    <LeftSide>
      <Company>{company}</Company>
      <Date>
        <StartDate>{startDate}</StartDate>&nbsp;-&nbsp;<EndDate>{endDate}</EndDate>
      </Date>
      <Location>{location}</Location>
    </LeftSide>
    <RightSide>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </RightSide>
  </StyledExperienceItem>
);

export default function ExperienceItems() {
  return (
    <div>
      {EXPERIENCE.map((exItem, i) => (
        <ExperienceItem key={i} exItem={exItem} />
      ))}
    </div>
  );
}

/**
 * 
 * company: 'Gracenote - A Nielsen Company',
    title: 'Software Engineer II - Frontend',
    description:
      'Designed multiple packages that are in use across the company including utility tools and component libraries. Helped to mentor junior developers.',
    startDate: '06/2019',
    endDate: 'present',
    location: 'Emeryville, CA',
 */
