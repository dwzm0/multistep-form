import React from 'react'
import { SubHeading, Heading, Text, Section, TextWrapper, Footer, ForwardButton, BackButton } from '../../globalStyle'
import { SecondFormChoiceContainer, SecondFormChoice, LogoContainer, Logo, PlanTextWrapper, PriceText, YearPlanTogglerContainer, YearPlanTogglerLabel, YearPlanTogglerInput, YearPlanTogglerSpan } from './FormSecond.elements'

interface FormSecondPropsInt {
  arcadeLogo: string
  advancedLogo: string
  proLogo: string
  proName: string
  arcadeName: string
  advancedName: string
  arcadePrice: string
  advancedPrice: string
  proPrice: string
  darkText: boolean
  headerText: string
  subText: string
  togglerMonth: string
  togglerYear: string
}

const FormSecond = ({ togglerMonth, togglerYear, headerText, subText, darkText, arcadeLogo, advancedLogo, proLogo, arcadeName, advancedName, proName, arcadePrice, advancedPrice, proPrice }: FormSecondPropsInt): JSX.Element => {
  return (
    <>
        <Section>
            <TextWrapper>
              <Heading>{headerText}</Heading>
              <Text>{subText}</Text>
            </TextWrapper>
            <SecondFormChoiceContainer>
                <SecondFormChoice>
                    <LogoContainer>
                      <Logo src={arcadeLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{arcadeName}</SubHeading>
                      <PriceText>{arcadePrice}</PriceText>
                    </PlanTextWrapper>
                </SecondFormChoice>
                <SecondFormChoice>
                    <LogoContainer>
                      <Logo src={advancedLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{advancedName}</SubHeading>
                      <PriceText>{advancedPrice}</PriceText>
                    </PlanTextWrapper>
                </SecondFormChoice>
                <SecondFormChoice>
                    <LogoContainer>
                      <Logo src={proLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{proName}</SubHeading>
                      <PriceText>{proPrice}</PriceText>
                    </PlanTextWrapper>
                </SecondFormChoice>
            </SecondFormChoiceContainer>
            <YearPlanTogglerContainer>
              <SubHeading darkText={true}>{togglerMonth}</SubHeading>
                  <YearPlanTogglerLabel>
                        <YearPlanTogglerInput type='checkbox' />
                        <YearPlanTogglerSpan />
                  </YearPlanTogglerLabel>
              <SubHeading darkText={true}>{togglerYear}</SubHeading>
            </YearPlanTogglerContainer>
            <Footer>
              <BackButton>Go Back</BackButton>
              <ForwardButton>Next Step</ForwardButton>
            </Footer>
        </Section>
    </>
  )
}

export default FormSecond
