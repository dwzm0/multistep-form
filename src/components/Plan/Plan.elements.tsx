import styled from 'styled-components'
import { Text } from '../../globalStyle'

export const PlanForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const PlanLable = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 10px;
    width: 140px;
    height: 160px;

    transition:0.2s ease-in-out;
        &:hover,
        &:focus {
            background-color:var(--alabaster);
            border-color:var(--purplish-blue);
            outline:none;
            cursor: pointer;

            
        }
        &:invalid {
            border-color:var(--strawberry-red);
        }  


    @media screen and (max-width: 770px) {
    flex-direction: row; 
    width: 100%;
    height: 75px;
    }
`

export const PlanFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    

    @media screen and (max-width: 770px) {
    flex-direction: column;
    gap: 10px;
  }

  
    
`
export const ExtraText = styled.p`
    font-size: 13px;
    color: var(--marine-blue);
`
interface TogglerTextProps {
  readonly toggleColor: boolean
}

export const TogglerText = styled.p<TogglerTextProps>`
    font-size: 15px;
    font-weight: 600;
    color: ${({ toggleColor }) => (toggleColor ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)')};
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

export const PlanInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:checked + ${PlanLable}{
        background-color:var(--alabaster);
        border-color:var(--purplish-blue);
        outline:none;
  }
    
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
