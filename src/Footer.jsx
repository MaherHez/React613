import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';
import { ContactFunButtonStyled, FunButtonStyled } from './FunButtons';
import cv from './assets/cv.pdf'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;

`;


const StyledFooterText = styled.footer`
  display: flex;
`;


const StyledFooterIcons = styled.footer`
  display: flex;
`;

const StyledLinkIcon = styled.a`
  color: black;
  margin: 1rem;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;


const footerData = [
  {
    id: 1,
    to: "https://github.com/MaherHez",
    icon: <FaGithub />
  },
  {
    id: 2,
    to: "https://www.linkedin.com/in/maherhezam/",
    icon: <FaLinkedin />
  },
  {
    id: 3,
    to: "https://www.figma.com/files/recent?fuid=1057682210284645513",
    icon: <FaFigma />
  }
];



function Footer() {
  return (
    <>

      <StyledFooterText>
        <p>Maher Hezam - UX/UI-Designer</p>
      </StyledFooterText>


      <StyledFooter>


        <StyledFooterIcons>
          {footerData.map(data => <StyledLinkIcon href={data.to} key={data.id} >{data.icon}</StyledLinkIcon>)}<a href={cv} download="Maher-Hezam-CV"><ContactFunButtonStyled>Resumé</ContactFunButtonStyled></a>
        </StyledFooterIcons>
      </StyledFooter>

    </>
  )
}

export default Footer;



