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
export const MainContainer = styled.main`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding-top: 30px;
   padding-left: 100px;
   padding-right: 80px;
   max-width: 650px;

   @media screen and (max-width: 770px) {
        max-width: 448px;
        width: 100%;
        padding: 24px;
        background-color: var(--white);
        margin: -4.5rem auto 0px;
        z-index: 1;
        box-shadow: rgba(2, 41, 90, 0.05) 0px 8px 24px 24px;
        border-radius: 0.5rem;
    }
`
export const PanelContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 0px auto;                         
  border-radius: 1rem;
  background-color: var(--white);


  @media screen and (max-width: 770px) {
    flex-direction: column;
    padding: 0px;
    width: 100%;
    background-color: var(--alabaster);
  }
`
export const StyledSection = styled.section`
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const FormWrapper = styled.div`
    width: 100%;
    flex-grow: 1;
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
  font-size: 16px;
  
`

export const Footer = styled.div`
      display: grid;
      width: 100%;
      position:relative;
      grid-template-columns: 1fr 1fr;
      left: auto;
      right: auto;
      bottom: auto;
      padding-bottom: 10px;
      
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
export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  font-weight: 700;
  border-radius: 7px;
  border: none;
  padding: 15px 25px;
  cursor: pointer;
  min-width: 122px;

  @media screen and (max-width: 770px) {
    border-radius: 3px;
    padding: 11px 12px;
    font-size: 15px;
    align-self: auto;
    margin-inline: 20px;  
    min-width: 122px;
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
  grid-column: 2 / 3;
  justify-self: flex-end;

  &:hover {
    background-color: var(--purplish-blue);
  }

  &:active {
    background-color: var(--pastel-blue);
  }
`
export default GlobalStyle
