import React from 'react'
import { MainContainer, SubHeading, Text, Heading, StyledSection, TextWrapper, Footer, ForwardButton, BackButton } from '../../globalStyle'
import { FourthFormContainer, ChoosenPlanContainer, SumContainer, FinalSumText } from './CheckOut.elements'

interface formFinalPropsInt {
  finalHeading: string
  finalText: string
}

const CheckOut = ({ finalHeading, finalText }: formFinalPropsInt): JSX.Element => {
  return (
    <>
      <MainContainer>
          <StyledSection>
              <TextWrapper>
                <Heading>{finalHeading}</Heading>
                <Text>{finalText}</Text>
              </TextWrapper>
              <FourthFormContainer>
                <ChoosenPlanContainer>
                    <SubHeading darkText={true}>Arcade (Yearly)</SubHeading>
                    <Text>Change</Text>
                </ChoosenPlanContainer>
                <SubHeading darkText={true}>$90/yr</SubHeading>
              </FourthFormContainer>
              <SumContainer>
                <Text>Total(per year)</Text>
                <FinalSumText>$120/yr</FinalSumText>
              </SumContainer>
              <Footer>
                    <BackButton>Go Back</BackButton>
                    <ForwardButton>Next Step</ForwardButton>
              </Footer>
          </StyledSection>
      </MainContainer>
    </>
  )
}

export default CheckOut
