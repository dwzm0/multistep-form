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
 } 
`
export const GeneralContainer = styled.div`
  background-color: hsl(231, 100%, 99%);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    @media screen and (max-width: 770px) { 
        padding: 16px 0px;
    }
`

export const ButtonMobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 770px) {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    background-color: hsl(0, 0%, 100%);
    min-width: 375px;
    min-height: 70px;
    z-index: 1;
  }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  @media screen and (max-width: 770px) {
    display: none;
  }
`
export const Heading = styled.h1`
  font-weight: 700;
  color: hsl(213, 96%, 18%);
  padding-block: 5px;

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
  font-size: 16px;
  font-weight: 400;
  color: hsl(231, 11%, 63%);

  @media screen and (max-width: 770px) {
    font-size: 17px;
  }
  
`
export const Img = styled.img`
    padding: 0;
    border: 0;
    vertical-align: middle;
    display: inline-block;
`
const Button = styled.button`
  font-size: 16px;
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
  background-color: hsl(0, 0%, 100%);
  color: hsl(231, 11%, 63%);

  &:hover, :active {
    color: hsl(213, 96%, 18%);
  }
`
export const ForwardButton = styled(Button)`
  background-color: hsl(213, 96%, 18%);
  color: hsl(0, 0%, 100%);

  &:hover {
    background-color: hsl(243, 100%, 62%);
  }

  &:active {
    background-color: hsl(228, 100%, 84%);
  }
`
export default GlobalStyle
