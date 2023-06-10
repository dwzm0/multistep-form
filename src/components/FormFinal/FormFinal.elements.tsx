import styled from 'styled-components'

export const ChoosenPlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const FinalFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 240px;
    background-color: hsl(217, 100%, 97%);
    padding: 20px;
    width: 450px;
    border-radius: 10px;
    margin-top: 40px;
    margin-bottom: 30px;


    @media screen and (max-width: 770px) {
        gap: 103px;
        margin-top: 0px;
        margin-bottom: 0px;
        max-width: 320px;
   }
`
export const SumContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 230px;
    padding-inline: 20px;
    padding-top: 10px;
    width: 450px;

    @media screen and (max-width: 770px) {
        max-width: 320px;
   }
`

export const FinalSumText = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: hsl(243, 100%, 62%);
`
