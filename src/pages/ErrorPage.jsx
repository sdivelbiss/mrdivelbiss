import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { APP_URLS } from '../config/AppConstants';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledErrorImage = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(2.5);
    -ms-transform: scale(2.5);
    transform: scale(2.5);
    border-radius: 50%;
    background-color: #fff;
    z-index: -1;
  }
`;

const StyledIcon = styled.i`
  font-size: 150px;
`;

const Text404 = styled.h1`
  font-size: 75px;
  font-weight: 800;
  margin-top: 0px;
  margin-bottom: 15px;
  color: #000;
  text-transform: uppercase;
`;

const ErrorMessageHeader = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  color: #000;
`;

const ErrorMessageP = styled.p`
  color: #949aa0;
  font-weight: 300;
`;

const ErrorLink = styled(Link)`
  display: inline-block;
  border-radius: 40px;
  text-decoration: none;
  background: #4949f3;
  padding: 5px 15px;
  color: #fff;
`;

export default function Error404() {
  return (
    <StyledContainer>
      <StyledErrorImage>
        <StyledIcon className="fa fa-meh-o" aria-hidden="true" />
      </StyledErrorImage>
      <div>
        <Text404>404</Text404>
        <div>
          <ErrorMessageHeader>Oops! Page Not Found</ErrorMessageHeader>
          <ErrorMessageP>Sorry but the page you are looking for does not exist.</ErrorMessageP>
          <ErrorLink to={APP_URLS.HOME}>Home</ErrorLink>
        </div>
      </div>
    </StyledContainer>
  );
}
