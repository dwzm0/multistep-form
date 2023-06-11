import { styled } from 'styled-components'

export const MainContainer = styled.main`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding: 30px 80px 30px 100px;
   max-width: 650px;

   @media screen and (max-width: 770px) {
        max-width: 448px;
        width: 100%;
        padding: 24px;
        background-color: var(--alabaster);
        margin: -4.5rem auto 0px;
        z-index: 1;
        box-shadow: rgba(2, 41, 90, 0.05) 0px 8px 24px 24px;
        border-radius: 0.5rem;
    }
`
