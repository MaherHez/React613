import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Presentation from './Presentation';
import { FunButtonStyled, BigFunButtonStyled } from './FunButtons';
import Workbox from './Workbox';
import data from './data';
import NyNavbar from './NyNavbar';
import MoreWork from './MoreWork';

import logo from './assets/mux.png';
import sun from './assets/sun.png';
import selfie from './assets/selfie.png';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

const OverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 2rem;
  min-width: 100vw;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin-right: 3rem;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PresContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SunContainer = styled.div`
  justify-content: center;
  align-self: center;
  max-width: 13.5rem;
  margin-left: 30rem;
`;

const RecContainer = styled.div`
  margin-top: 16rem;
  width: 100vw;
`;

const LogoContainer = styled.div`
  display: flex;
  max-width: 3.5rem;
  max-height: 3rem;
  padding: 5%;
  transition: transform 0.3s ease-in-out;
  align-items: flex-start;
  &:hover {
    transform: rotate(45deg) scale(1.1);
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

const OverContainerMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WorkHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
  font-size: 1.5rem;
  h1 {
    color: #2c363f;
  }
`;

const WorkMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-height: 20rem;
  margin-bottom: 25rem;
`;

const WorkPres = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: 4rem;
  h1 {
    color: #2c363f;
  }
  p {
    max-width: 25rem;
  }
`;

const WorkImgBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 25rem;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  height: 42rem;
  width: 36rem;
  border-radius: 15px;
  margin-top: 5rem;
  border: 2px solid black;
  background-color: #f1f1d8;
  align-self: center;
  padding: 2rem;
`;

const AboutMeHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #2c363f;
`;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutMeTextTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



function App() {
  return (
    <Router>
      <FlexContainer>
        <Switch>
          <Route path="/MoreWork" component={MoreWork} />
          <Route path="/">
            <OverContainer>
              <NavContainer>
                <LogoContainer>
                  <StyledImg src={logo} alt="logo" />
                </LogoContainer>
                <NavWrapper>
                  <NyNavbar />
                </NavWrapper>
              </NavContainer>
              <IntroContainer id="contact">
                <PresContainer>
                  <Presentation />
                </PresContainer>
                <SunContainer>
                  <StyledImg src={sun} alt="sun" />
                </SunContainer>
              </IntroContainer>
            </OverContainer>

            <OverContainerMid>
              <WorkHeader id="work">
                <h1>Latest Work</h1>
              </WorkHeader>
              <WorkMain>
                <WorkPres>
                  <h1>{data[0].projectName}</h1>
                  <p>{data[0].description}</p>
                  <FunButtonStyled>Read more</FunButtonStyled>
                </WorkPres>
                <WorkImgBox>
                  <Workbox />
                </WorkImgBox>
              </WorkMain>
              <WorkMain>
                <WorkPres>
                  <h1>{data[1].projectName}</h1>
                  <p>{data[1].description}</p>
                  <FunButtonStyled>Read more</FunButtonStyled>
                </WorkPres>
                <WorkImgBox>
                  <Workbox />
                </WorkImgBox>
              </WorkMain>
            </OverContainerMid>


            <Link to="/MoreWork"><CenteredButton><BigFunButtonStyled> See more work</BigFunButtonStyled></CenteredButton></Link>


            <AboutMe>
              <AboutMeHeader id="about">About me</AboutMeHeader>
              <AboutMeWrapper>
                <AboutMeTextTop>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AboutMeTextTop>
                <AboutMeTextTop>
                <StyledImg src={selfie} alt="selfie" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AboutMeTextTop>
              </AboutMeWrapper>
            </AboutMe>
          </Route>
        </Switch>
      </FlexContainer>
    </Router>
  );
}

export default App;
