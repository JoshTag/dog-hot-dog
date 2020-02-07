import React from 'react'
import orcas from "../../assets/orca.gif"
import styled from "styled-components";
import Corgi from "../../components/Corgi"

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${orcas});
  background-size: contain;
  display: flex;
  justify-content: center;
  color: #FF6700;
  font-weight: 800;
  @media(min-width: 48rem){
    background-size: 16rem 14rem;
  }
`

const ErrorTitle = styled.h1`
  font-size: 1.5rem;
  position: absolute;
  top: 20vh;
  text-align: center;
  @media(min-width: 48rem){
    font-size: 3rem;
  }
`

const ErrorText = styled.p`
  font-size: 1rem;
  position: absolute;
  top: 35vh;
  text-align: center;
  @media(min-width: 48rem){
    font-size: 2rem;
    width: 600px;
  }
`

export default function ErrorPage() {
  return (
    <ErrorContainer>
      <ErrorTitle>404 ERROR PAGE NOT FOUND</ErrorTitle>
      <ErrorText>Oops.  You Found Some Orca Whales, But I Think You're Looking For Hot Dogs or Dogs</ErrorText>
      <Corgi />
    </ErrorContainer>
  )
}
