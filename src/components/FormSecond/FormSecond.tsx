import React from 'react'
import { Heading, Text, Button, ButtonMobileContainer, GeneralFormContainer, SubHeading, Img } from '../../globalStyle'
import { SecondFormChoiceContainer, SecondFormChoice } from './FormSecond.elements'
import { useResize } from '../../hooks/index'

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
}

const FormSecond = ({ arcadeLogo, advancedLogo, proLogo, arcadeName, advancedName, proName, arcadePrice, advancedPrice, proPrice }: FormSecondPropsInt): JSX.Element => {
  const showSmallBg = useResize()

  return (
    <>
        <GeneralFormContainer>
            <Heading>Personal info</Heading>
            <Text>Please provide your name, email address, and phone number.</Text>
            <SecondFormChoiceContainer>
                <SecondFormChoice>
                    <Img src={arcadeLogo}/>
                    <SubHeading>{arcadeName}</SubHeading>
                    <Text>{arcadePrice}</Text>
                </SecondFormChoice>
                <SecondFormChoice>
                    <Img src={advancedLogo}/>
                    <SubHeading>{advancedName}</SubHeading>
                    <Text>{advancedPrice}</Text>
                </SecondFormChoice>
                <SecondFormChoice>
                    <Img src={proLogo}/>
                    <SubHeading>{proName}</SubHeading>
                    <Text>{proPrice}</Text>
                </SecondFormChoice>
            </SecondFormChoiceContainer>
            {!showSmallBg ? <Button>Next Step</Button> : null }
        </GeneralFormContainer>
        <ButtonMobileContainer>
              {showSmallBg ? <Button>Next Step</Button> : null }
          </ButtonMobileContainer>
    </>
  )
}

export default FormSecond
