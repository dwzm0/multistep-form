import React from 'react'
import { SubHeading } from '../../globalStyle'
import { StyledStep, StepInfoContainer, StepCicle, InfoText } from './SideBar.elements'

interface StepProps {
  stepText: string
  stepNum: number
  step: number
}

const Step = ({ stepNum, stepText, step }: StepProps): JSX.Element => {
  return (
    <>
        <StyledStep>
              <StepCicle $stepToggler={step === stepNum }>{stepNum}</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP {stepNum}</InfoText>
                <SubHeading darkText={false}>{stepText}</SubHeading>
              </StepInfoContainer>
        </StyledStep>
    </>
  )
}

export default Step
