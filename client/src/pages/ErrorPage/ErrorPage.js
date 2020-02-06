import React from 'react'
import orcas from "../../assets/orca.gif"
import styled from "styled-components";

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(53, 116, 204);
`

const ErrorImg = styled.img`
  width: 800px;
  height: 600px;
`

const ErrorTitle = styled.h1`
  font-size: 1rem;
`

export default function ErrorPage() {
  return (
    <ErrorContainer>
      <ErrorTitle>LEAVE THE ORCA WHALES ALONE!  THIS IS NOT THE PAGE YOU'RE LOOCKING FOR</ErrorTitle>
      <ErrorImg src={orcas} alt="Spinning Orcas"/>
    </ErrorContainer>
  )
}
