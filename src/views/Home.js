import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  font-size: 100px;
`;

const Title = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
`;

const StyledHome = styled.div`
  font-family: 'MuseoModerno', cursive;
`;

export default function Home() {
  return (
    <StyledHome>
      <Name>Scott Divelbiss</Name>
      <Title>Front End Engineer</Title>
    </StyledHome>
  );
}
