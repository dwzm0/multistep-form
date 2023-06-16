import styled from 'styled-components'
import { Text } from '../../globalStyle'

export const ChoosenPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 25px;
  padding-top: 20px;
  padding-bottom: 26px;
  background-color: var(--alabaster);
`
export const ChoosenPlan = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const CheckOutConfirmForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

`
export const ChoosenPlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const SumContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    padding-top: 10px;
    width: 442px;
    margin-top: 20px;

    @media screen and (max-width: 770px) {
        width: 100%;
   }
`

export const FinalSumText = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: hsl(243, 100%, 62%);
`
export const SmText = styled(Text)`
    font-size: 15px;
    padding-top: 20px;
`
export const StyledHr = styled.hr`
    height: 1px;
    margin-top: 20px;
    color: var(--cool-gray);
`
