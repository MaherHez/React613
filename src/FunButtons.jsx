import React from 'react'
import styled from 'styled-components'


export const FunButtonStyled = styled.button`
height: 3rem;
width: 10rem;
background-color: #EFD075;
color: black;
border: 2px black solid;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
cursor: pointer;
position: relative;
font-family: Syne, system-ui, Avenir, Helvetica, Arial, sans-serif;
font-weight: 600;
:hover { 
  /* transform: scale(0.95);  */
  transform: translateX(0px);
  box-shadow: none;
  /* transform: translateY(-5px); */
  background-color: #ECE0E0;
  border: none;
  &::after {
    background-color: #EFD075;
  }
}

p{font-weight:bold;
  color: black;
  font-size: 0.9rem;
}

::after{
 content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 102%;
    height: 103%;
    background-color: #ECE0E0;
    z-index: -1;
    border-radius: 0.5rem;
    border: 2px black solid;
    transition: transform 0.2s ease-out;
}

//& referar till parenten dvs knappen
/* &:hover::after {
    transform: scale(0.95);
  
  } */

;`


export const BigFunButtonStyled = styled(FunButtonStyled)`

width:18rem;
background-color: #C9A0A0;
align-self: center;
padding: 2rem;

`;

export const ContactFunButtonStyled = styled(FunButtonStyled)`

height: 2rem;
width:5rem;
background-color: #ACBCE5;
align-self: center;
padding: 1rem;

&:hover::after {
    content: "";
  }

`;


/* function FunButton() {
  return (
<FunButtonStyled><p>Read more</p></FunButtonStyled>
  )
}

export default FunButton


 */