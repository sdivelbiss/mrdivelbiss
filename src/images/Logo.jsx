import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../images/logo1.svg';
import { ReactComponent as Logo2 } from '../images/logo2.svg';
import { ReactComponent as Logo3 } from '../images/logo3.svg';
import { ReactComponent as Logo4 } from '../images/logo4.svg';
import { ReactComponent as Logo5 } from '../images/logo5.svg';
import { ReactComponent as Logo6 } from '../images/logo6.svg';

const FIVE_SECONDS = 5000;

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

const randomNumber = () => Math.floor(Math.random() * 6) + 1;
const StyledLogoWrapper = styled.div`
  svg {
    height: 50px;
    width: auto;
    vertical-align: baseline;
  }
`;

export default function LogoGenerator() {
  const [Component, setComponent] = useState(Logo1);
  useEffect(() => {
    const interval = setInterval(() => {
      setComponent(logos[randomNumber()] ?? Logo1);
    }, FIVE_SECONDS);
    return () => clearInterval(interval);
  }, []);
  return (
    <StyledLogoWrapper>
      <Component />
    </StyledLogoWrapper>
  );
}
