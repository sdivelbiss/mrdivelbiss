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

const MainAppWrapper = styled.div`
  margin: 0 10vw;
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

const MainContentWrapperHomePage = styled(MainContentWrapper)`
  align-items: center;
`;

function App() {
  return (
    <MainAppWrapper className="app">
      <Nav />
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
        <Route exact path={APP_URLS.CONTACT}>
          <MainContentWrapper>
            <Contact />
          </MainContentWrapper>
        </Route>
        <Route component={Error404} />
      </Switch>
    </MainAppWrapper>
  );
}

export default App;
