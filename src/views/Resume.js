import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
import styled from 'styled-components';
import resumePDF from '../docs/resume.pdf';

// Setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Overlay = styled.div`
  background-color: rgba(100, 100, 100, 0.5);
  position: absolute;
  height: 100%;
  width: 594px;
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: all 0s;
`;

const StyledDocument = styled(Document)`
  &:hover {
    ${Overlay} {
      transition: all 0.5s;
      visibility: visible;
    }
  }
`;

const Icon = styled.i`
  font-size: 50px;
  color: #13232f;
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

const Resume = () => {
  const [_, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages({ numPages });
  };
  return (
    <div>
      <StyledDocument file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Overlay>
          <Link to={resumePDF} target="_blank" download>
            <Icon className={'fa fa-download'} />
          </Link>
        </Overlay>
        <Page pageNumber={pageNumber} />
      </StyledDocument>
    </div>
  );
};

export default Resume;
