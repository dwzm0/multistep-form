import styled from 'styled-components'
import { Text, SubHeading } from '../../globalStyle'

export const ThirdFormChoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-bottom: 80px;
    margin-top: 30px;

    @media screen and (max-width: 770px) {
        margin-bottom: 0px;
        max-width: 345px;
   }

`
export const ThirdFormChoice = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 450px;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 10px;

    &:hover  {
        border-color:  hsl(213, 96%, 18%);
        cursor: pointer;
    }  

    @media screen and (max-width: 770px) {
       width: 294px;
       height: 60px;
       align-items: center;
    }
`
export const AddonSubheading = styled(SubHeading)`
    font-size: 16px;
    @media screen and (max-width: 770px) {
    font-size: 15px;
  }
`
export const AddonText = styled(Text)`
    font-size: 15px;
    @media screen and (max-width: 770px) {
    font-size: 14px;
  }
`
export const CheckLabel = styled.label`
  padding-top: 30px; 
  padding-left: 20px;

  @media screen and (max-width: 770px) {
    padding: 20px 14px;
  }

`
export const CheckSpan = styled.span`
  border: 1px solid hsl(229, 24%, 87%);
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
`

export const CheckInput = styled.input`
  display: none;

  &:checked + &${CheckSpan} {
    background: #f00;
    color: #fff;
  }
`
