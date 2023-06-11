import styled from 'styled-components'

export const ChoosenPlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const FourthFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--alabaster);
    padding: 20px;
    width: 450px;
    border-radius: 10px;
    margin-bottom: 30px;


    @media screen and (max-width: 770px) {
        margin-top: 0px;
        margin-bottom: 0px;
        width: 100%;
   }
`
export const SumContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    padding-top: 10px;
    width: 450px;
    margin-bottom: 190px;

    @media screen and (max-width: 770px) {
        width: 100%;
        margin-bottom: 0px;
   }
`

export const FinalSumText = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: hsl(243, 100%, 62%);
`
