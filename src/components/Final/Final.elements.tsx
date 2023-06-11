import styled from 'styled-components'
import { StyledSection, TextWrapper } from '../../globalStyle'

export const StyledSectionFinal = styled(StyledSection)`
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const TextWrapperFinal = styled(TextWrapper)`
    align-items: center;
    text-align: center;
    margin-bottom: 50px;

    @media screen and (max-width: 770px) { 
        gap: 10px
    }
`

export const Img = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 30px;

  @media screen and (max-width: 770px) { 
        margin-top: 70px;
        margin-bottom: 20px;
        width: 55px;
        height: 55px;
    }
`
