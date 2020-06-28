import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background: #feffff;
  padding: 40px;
  width: 50%;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px #13232f;
`;

const StyledLabel = styled.label`
  transform: translateY(6px);
  left: 13px;
  color: #333;
  transition: all 0.25s ease;
  pointer-events: none;
  font-size: 22px;
`;

const StyledInput = styled.input`
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #333;
  color: #333;
  border-radius: 4px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  &:focus {
    outline: 0;
    border-color: #777;
  }
`;

const StyledButton = styled.button`
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 20px;
  margin: 20px auto;
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #1ab188;
  color: #fff;
  transition: all.5s ease;
  -webkit-appearance: none;
  border-radius: 8px;
  &:hover,
  &:focus {
    background: #1ab188;
  }
`;

const StyledTextArea = styled.textarea`
  font-size: 22px;
  display: block;
  width: 100%;
  height: 200px;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #333;
  color: #333;
  border-radius: 4px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  &:focus {
    outline: 0;
    border-color: #777;
  }
`;

export default function Contact() {
  return (
    <StyledForm action="/" method="post" data-netlify="true">
      <div>
        <div>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput type="text" autocomplete="off" />
        </div>

        <div>
          <StyledLabel>Last Name</StyledLabel>
          <StyledInput type="text" autocomplete="off" />
        </div>
      </div>

      <div>
        <StyledLabel>Email Address</StyledLabel>
        <StyledInput type="email" autocomplete="off" />
      </div>
      <div>
        <StyledLabel>Message</StyledLabel>
        <StyledTextArea autocomplete="off" />
      </div>

      <StyledButton type="submit" className="button button-block">
        Submit
      </StyledButton>
    </StyledForm>
  );
}
