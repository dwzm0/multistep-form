import styled, { createGlobalStyle } from 'styled-components'

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
   height: 600px;
   padding: 50px 100px;

   @media screen and (max-width: 930px) {
    padding: 50px 50px;
   }
   @media screen and (max-width: 830px) {
    padding: 50px 25px;
   }

   @media screen and (max-width: 770px) {
        height: 380px;
        width: 342px;
        padding: 28px 25px;
        position: relative;
        bottom: 72px;
        background-color: hsl(0, 0%, 100%);
        border-radius: 10px;
        
    }
`
export const ButtonMobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 770px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: hsl(0, 0%, 100%);
    min-width: 375px;
    min-height: 70px;
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
export const SubHeading = styled.h2`
  font-size: 15px;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
`

export const Text = styled.p`
  font-size: 15px;
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

export const Button = styled.button`
  background-color: hsl(213, 96%, 18%);
  color: hsl(0, 0%, 100%);
  font-size: 16px;
  font-weight: 700;
  border-radius: 7px;
  border: none;
  padding: 15px 25px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: hsl(243, 100%, 62%);
  }

  &:active {
    background-color: hsl(228, 100%, 84%);
  }

  @media screen and (max-width: 770px) {
    border-radius: 3px;
    padding: 11px 12px;
    font-size: 15px;
    align-self: auto;
    margin-inline: 20px;  
  }
`
export default GlobalStyle
