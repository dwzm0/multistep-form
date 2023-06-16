import styled from 'styled-components'
import { Text, SubHeading } from '../../globalStyle'
import checkImg from '../../images/icon-checkmark.svg'

export const AddonsForm = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`
export const AddonContainer = styled.div`
    width: 100%;
    padding-bottom: 14px;
`

export const AddonLable = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 20px;
    height: 80px;
    width: 442px;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 8px;
    transition:0.2s ease-in-out;

    &:hover,
    &:focus {
        border-color:var(--purplish-blue);
        outline:none;
        cursor: pointer;
    }

    @media screen and (max-width: 770px) {
       width: 100%;
       align-items: center;
    }

`

export const AddonTextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
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
export const CheckMark = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    position:relative;
    padding-right: 20px;
    &:before,
    &:after {
        content:'';
        width: 1.25rem;
        height:1.25rem;
        display:block;
        border-radius: 5px;
    }
    &:before {
        background-color:var(--white);
        border:1px solid var(--light-gray);
        
    }
    &:after {
        position:absolute;
        left:1px;
    }
`

export const CheckMarkInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:checked + ${AddonLable}{
        background-color:var(--alabaster);
        border-color:var(--purplish-blue);
        outline:none;

       ${CheckMark} {
          &:after {
            background:var(--purplish-blue) url(${checkImg}) no-repeat center;
          }
       } 
    }
`

export const AddonPriceText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--purplish-blue);
`
