import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { APP_URLS } from './config/AppConstants';
import Nav from './components/nav/Nav';
import Error404 from './pages/ErrorPage';
import Home from './views/Home';
import Experience from './views/Experience';
import Tech from './views/Tech';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Resume from './views/Resume';
import GitHubLogo from './images/github.png';
import LinkedInLogo from './images/linkedin.png';

const MainAppWrapper = styled.div`
  /* margin: 0 10vw; */
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr;
  row-gap: 20px;
`;

const MainContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 10vw 1fr;
  margin: 0 10vw 0 0;
`;

const LeftSide = styled.div`
  display: flex;
  height: fit-content;
  position: sticky;
  top: 45vh;
  flex-direction: column;
  padding: 0 2vw;
  /* justify-content: center; */
  /* align-items: center; */
`;

const MainContentWrapperHomePage = styled(MainContentWrapper)`
  height: calc(100% - 100px);
  align-items: center;
`;

const SocialLink = styled.a`
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  img {
    width: 35px;
    height: auto;
    margin-bottom: 20px;
  }
`;

function App() {
  return (
    <MainAppWrapper className="app">
      <Nav />
      <ContentWrapper>
        <LeftSide>
          <SocialLink href={'https://github.com/sdivelbiss'} target="_blank">
            <img src={GitHubLogo} alt={'Github'} />
          </SocialLink>
          <SocialLink href={'https://www.linkedin.com/in/scottdivelbiss/'} target="_blank">
            <img src={LinkedInLogo} alt={'Linkedin'} />
          </SocialLink>
        </LeftSide>
        <Switch>
          <Route exact path={APP_URLS.HOME}>
            <MainContentWrapperHomePage>
              <Home />
            </MainContentWrapperHomePage>
          </Route>
          <Route exact path={APP_URLS.EXPERIENCE}>
            <MainContentWrapper>
              <Experience />
            </MainContentWrapper>
          </Route>
          <Route exact path={APP_URLS.PROJECTS}>
            <MainContentWrapper>
              <Projects />
            </MainContentWrapper>
          </Route>
          <Route exact path={APP_URLS.TECH}>
            <MainContentWrapper>
              <Tech />
            </MainContentWrapper>
          </Route>
          <Route exact path={APP_URLS.RESUME}>
            <MainContentWrapper>
              <Resume />
            </MainContentWrapper>
          </Route>
          <Route exact path={APP_URLS.CONTACT}>
            <MainContentWrapper>
              <Contact />
            </MainContentWrapper>
          </Route>
          <Route component={Error404} />
        </Switch>
      </ContentWrapper>
    </MainAppWrapper>
  );
}

export default App;
