import styled from 'styled-components'
import { Text } from '../../globalStyle'

export const SecondFormChoiceContainer = styled.div`
   
    display: flex;
    flex-direction: row;
    gap: 20px;
    

    @media screen and (max-width: 770px) {
    flex-direction: column;
    gap: 10px;
  }
    
`
export const SecondFormChoice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 10px;
    width: 140px;
    height: 160px;

    &:hover  {
        border-color:  hsl(213, 96%, 18%);
        cursor: pointer;
        
    }    


    @media screen and (max-width: 770px) {
    flex-direction: row; 
    width: 100%;
    height: 75px;
    }
`

export const PlanTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
`

export const PriceText = styled(Text)`
    font-size: 15px;
`

export const LogoContainer = styled.div`
    padding: 20px;
    @media screen and (max-width: 770px) {
        padding: 15px 12px;
    }

`

export const Logo = styled.img`
    width: 40px;
    height: 40px;

`

export const YearPlanTogglerContainer = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    z-index: 1;
    margin-top: 30px;
    margin-bottom: 120px;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-color: hsl(217, 100%, 97%);
    border-radius: 10px;

    @media screen and (max-width: 770px) {
        margin-bottom: 30px;
  }
`

export const YearPlanTogglerLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    z-index: auto;
`

export const YearPlanTogglerSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(213, 96%, 18%);
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 13px;
        width: 13px;
        left: 4px;
        bottom: 4px;
        transition: .4s;
        border-radius: 50%;
        background-color: hsl(217, 100%, 97%);

    }
`

export const YearPlanTogglerInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${YearPlanTogglerSpan}:before {
        transform: translateX(20px);
    }
`
