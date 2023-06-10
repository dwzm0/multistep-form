import React from 'react'
import { AsideBar, StepContainer, StepInfoContainer, InfoText, Step, StepCicle } from './SideBar.elements'
import { SubHeading, Img } from '../../globalStyle'
import { useResize } from '../../hooks/index'

interface Props {
  smallImg: string
  bigImg: string
  darkText: boolean
}

export const SideBar = ({ darkText, smallImg, bigImg }: Props): JSX.Element => {
  const showSmallBg = useResize()
  return (
    <>
      <AsideBar>
        <StepContainer>
            <Step>
              <StepCicle>1</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 1</InfoText>
                <SubHeading darkText={darkText}>YOUR INFO</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle>2</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 2</InfoText>
                <SubHeading darkText={darkText}>SELECT PLAN</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle>3</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 3</InfoText>
                <SubHeading darkText={darkText}>ADD-ONS</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle>4</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 4</InfoText>
                <SubHeading darkText={darkText}>SUMMARY</SubHeading>
              </StepInfoContainer>
            </Step>
        </StepContainer>
        {showSmallBg ? <Img src={smallImg}/> : <Img src={bigImg}/>}
      </AsideBar>
    </>
  )
}

export default SideBar
