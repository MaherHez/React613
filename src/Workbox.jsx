import React from 'react'
import styled from 'styled-components'
import livlinan from './assets/livlinanmockup.png'

const StyledWorkBox = styled.div`
height: 38rem;
width:32rem;
background-color: white;
border: 2px black solid;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
;`;

const StyledImg = styled.img `
height: 100%;
width: 100%;

`;


function Workbox() {
  return (
    <StyledWorkBox>
      <StyledImg src={livlinan}/>
    </StyledWorkBox>
  )
}

export default Workbox