/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { AsideBar, StepContainer, StepInfoContainer, InfoText, Step, StepCicle } from './SideBar.elements'
import { SubHeading } from '../../globalStyle'
import { useAppState } from '../../state'

interface Props {
  darkText: boolean
}

export const SideBar = ({ darkText }: Props): JSX.Element => {
  const [state] = useAppState()

  return (
    <>
      <AsideBar>
        <StepContainer>
            <Step>
              <StepCicle stepToggler={state.step === 1 }>1</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 1</InfoText>
                <SubHeading darkText={darkText}>YOUR INFO</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle stepToggler={state.step === 2 }>2</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 2</InfoText>
                <SubHeading darkText={darkText}>SELECT PLAN</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle stepToggler={state.step === 3 }>3</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 3</InfoText>
                <SubHeading darkText={darkText}>ADD-ONS</SubHeading>
              </StepInfoContainer>
            </Step>
            <Step>
              <StepCicle stepToggler={state.step === 4 }>4</StepCicle>
              <StepInfoContainer>
                <InfoText>STEP 4</InfoText>
                <SubHeading darkText={darkText}>SUMMARY</SubHeading>
              </StepInfoContainer>
            </Step>
        </StepContainer>
      </AsideBar>
    </>
  )
}

export default SideBar
