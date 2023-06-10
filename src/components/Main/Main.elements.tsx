import { styled } from 'styled-components'

export const MainContainer = styled.main`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding: 30px 80px 30px 100px;
   max-width: 650px;

   @media screen and (max-width: 930px) {
    padding: 50px 50px;
   }
   @media screen and (max-width: 830px) {
    padding: 50px 25px;
   }

   @media screen and (max-width: 770px) {
        max-width: 448px;
        width: 100%;
        padding: 24px;
        background-color: hsl(231, 100%, 99%);
        border-radius: 0.5rem;
        margin: -4.5rem auto 0px;
        z-index: 1;
    }
`
