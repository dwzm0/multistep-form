/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { createGlobalStyle } from 'styled-components'

interface TextProps {
  readonly darkText: boolean
}

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
 } 
`
export const GeneralContainer = styled.div`
  background-color: var(--alabaster);
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 770px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
    @media screen and (max-width: 770px) { 
        gap: 20px;
        margin-bottom: 20px;
    }
`

export const Heading = styled.h1`
  font-weight: 700;
  color: var(--marine-blue);
  padding-top: 5px;
  font-size: 2rem;

  @media screen and (max-width: 770px) {
    font-size: 24px;
  }
`
export const SubHeading = styled.h2<TextProps>`
  font-size: 15px;
  font-weight: 700;
  color:  ${({ darkText }) => (darkText ? 'hsl(213, 96%, 18%)' : 'hsl(0, 0%, 100%)')};
  

  @media screen and (max-width: 770px) {
    font-size: 16px;
    }
`
export const Text = styled.p`
  font-weight: 400;
  color: var(--cool-gray);

  @media screen and (max-width: 770px) {
    font-size: 17px;
  }
  
`

export const Footer = styled.div`
      display: grid;
      position:relative;
      grid-template-columns: 1fr 1fr;
      padding: 0;
      z-index: 20;    
      
    @media screen and (max-width: 770px) {
        background-color: var(--white);
        padding: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
  }
`

const Button = styled.button`
  font-weight: 700;
  border-radius: 7px;
  border: none;
  padding: 15px 25px;
  cursor: pointer;

  @media screen and (max-width: 770px) {
    border-radius: 3px;
    padding: 11px 12px;
    font-size: 15px;
    align-self: auto;
    margin-inline: 20px;  
  }
`
export const BackButton = styled(Button)`
  background-color:  var(--white);
  color: var(--cool-gray);
  justify-self: flex-start;
  

  &:hover, :active {
    color: var(--marine-blue);
  }
`
export const ForwardButton = styled(Button)`
  background-color: var(--marine-blue);
  color: var(--white);
  justify-self: flex-end;

  &:hover {
    background-color: var(--purplish-blue);
  }

  &:active {
    background-color: var(--pastel-blue);
  }
`
export default GlobalStyle
