import React from 'react'
import { SubHeading, Heading, Text, GeneralFormContainer } from '../../globalStyle'
import { SecondFormChoiceContainer, SecondFormChoice, LogoContainer, Logo, TextWrapper, PriceText, YearPlanTogglerContainer, YearPlanTogglerLabel, YearPlanTogglerInput, YearPlanTogglerSpan } from './FormSecond.elements'
import { useResize } from '../../hooks/index'
import ButtonsComponent from '../ButtonsComponent'
import ButtonsMobileComponent from '../ButtonsMobileComponent'

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
  const showSmallBg = useResize()

  return (
    <>
        <GeneralFormContainer>
            <Heading>{headerText}</Heading>
            <Text>{subText}</Text>
            <SecondFormChoiceContainer>
                <SecondFormChoice>
                    <LogoContainer>
                      <Logo src={arcadeLogo}/>
                    </LogoContainer>
                    <TextWrapper>
                      <SubHeading darkText={darkText}>{arcadeName}</SubHeading>
                      <PriceText>{arcadePrice}</PriceText>
                    </TextWrapper>
                </SecondFormChoice>
                <SecondFormChoice>
                    <LogoContainer>
                      <Logo src={advancedLogo}/>
                    </LogoContainer>
                    <TextWrapper>
                      <SubHeading darkText={darkText}>{advancedName}</SubHeading>
                      <PriceText>{advancedPrice}</PriceText>
                    </TextWrapper>
                </SecondFormChoice>
                <SecondFormChoice>
                    <LogoContainer>
                      <Logo src={proLogo}/>
                    </LogoContainer>
                    <TextWrapper>
                      <SubHeading darkText={darkText}>{proName}</SubHeading>
                      <PriceText>{proPrice}</PriceText>
                    </TextWrapper>
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
            {!showSmallBg ? <ButtonsComponent/> : <ButtonsMobileComponent/>}
        </GeneralFormContainer>
    </>
  )
}

export default FormSecond
