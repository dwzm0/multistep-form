import styled from 'styled-components'
import { Img, Text } from '../../globalStyle'

export const SecondFormChoiceContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-top: 30px;
    margin-bottom: 18px;
    max-height: 200px;

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
    width: 295px;
    height: 75px;
    }
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

export const Logo = styled(Img)`
    width: 40px;
    height: 40px;

`

export const YearPlanTogglerContainer = styled.div`
    max-width: 450px;
    min-height: 50px;
/*     margin-bottom: 100px;
 */    display: flex;
    z-index: 1;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-color: hsl(217, 100%, 97%);
    border-radius: 10px;

    @media screen and (max-width: 770px) {
/*         margin-top: 75px;
 */
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
