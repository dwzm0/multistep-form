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

export const Container = styled.div`
  background-color: hsl(229, 24%, 87%);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GeneralFormContainer = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 5px;
   min-height: 600px;
   padding: 50px 100px;
   max-width: 650px;

   @media screen and (max-width: 930px) {
    padding: 50px 50px;
   }
   @media screen and (max-width: 830px) {
    padding: 50px 25px;
   }

   @media screen and (max-width: 770px) {
        min-height: 380px;
        max-height: 494px;
        max-width: 342px;
        padding: 28px 25px;
        position: relative;
        z-index: auto;

        bottom: 72px;
        background-color: hsl(0, 0%, 100%);
        border-radius: 10px;
        
    }
`
export const ButtonMobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 770px) {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    margin-top: 30px;
    background-color: hsl(0, 0%, 100%);
    min-width: 375px;
    min-height: 70px;
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
