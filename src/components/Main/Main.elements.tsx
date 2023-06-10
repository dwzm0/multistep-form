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
        width: 342px;
        min-height: 382px;
        max-height: 562px; 
        padding: 28px 25px;
        position: absolute;
        z-index: 1;
        bottom: 77px;
        background-color: hsl(0, 0%, 100%);
        border-radius: 10px;
        
    }
`
