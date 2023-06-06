import styled from 'styled-components'
import { Text } from '../../globalStyle'

export const ImgWrapper = styled.div`
    position: relative;
    padding: 18px 0 18px 22px;

    @media screen and (max-width: 770px) {
        padding: 0px;
        display: flex;
        justify-content: center;
    }
`

export const StepContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    gap: 30px;

    @media screen and (max-width: 770px) {
        flex-direction: row;
        padding: 30px 0px;
        gap: 18px;
    }
    
`

export const Step = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    
`

export const StepInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media screen and (max-width: 770px) {
        display: none;
    }
`
export const InfoText = styled(Text)`
    letter-spacing: -1px;
`
export const StepCicle = styled.div`
    border-radius: 50%;
    width: 33px;
    height: 33px;
    padding: 10px;
    border: 1px solid hsl(0, 0%, 100%);
    text-align: center;
    color: hsl(0, 0%, 100%);
    font-size: 14px;
    font-weight: 600;
    line-height: 12px;
`
