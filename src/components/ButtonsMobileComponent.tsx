import React from 'react'
import { ForwardButton, BackButton, ButtonMobileContainer } from '../globalStyle'

const ButtonsMobileComponent = (): JSX.Element => {
  return (
      <>
        <ButtonMobileContainer>
          <BackButton>Go Back</BackButton>
          <ForwardButton>Next Step</ForwardButton>
        </ButtonMobileContainer>
      </>
  )
}

export default ButtonsMobileComponent
