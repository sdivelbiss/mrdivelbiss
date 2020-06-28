import React from 'react';
import styled from 'styled-components';
import ExperienceItems from '../components/experience/ExperienceItems';

const Label = styled.label`
  font-size: 3rem;
  font-family: 'MuseoModerno', cursive;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #a1a7d8;
`;

export default function Experience() {
  return (
    <div>
      <Label>Experience</Label>
      <ExperienceItems />
    </div>
  );
}
