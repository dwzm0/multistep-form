import React from 'react'
import { ImgWrapper, StepContainer, StepInfoContainer, InfoText, Step, StepCicle } from './SideBar.elements'
import { SubHeading, Img } from '../../globalStyle'
import { useResize } from '../../hooks/index'

interface Props {
  smallImg: string
  bigImg: string
}

export const SideBar = ({ smallImg, bigImg }: Props): JSX.Element => {
  const showSmallBg = useResize()
  return (
    <>
      <ImgWrapper>
        <StepContainer>
            <Step>
              <StepCicle>1</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 1</InfoText>
                <SubHeading>YOUR INFO</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle>2</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 2</InfoText>
                <SubHeading>SELECT PLAN</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle>3</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 3</InfoText>
                <SubHeading>ADD-ONS</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle>4</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 4</InfoText>
                <SubHeading>SUMMARY</SubHeading>
              </StepInfoContainer>
            </Step>
        </StepContainer>
        {showSmallBg ? <Img src={smallImg}/> : <Img src={bigImg}/>}
      </ImgWrapper>
    </>
  )
}

export default SideBar
