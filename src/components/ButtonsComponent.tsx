import React from 'react'
import { ForwardButton, BackButton, ButtonContainer } from '../globalStyle'

const ButtonsComponent = (): JSX.Element => {
  return (
      <>
        <ButtonContainer>
          <BackButton>Go Back</BackButton>
          <ForwardButton>Next Step</ForwardButton>
        </ButtonContainer>
      </>
  )
}

export default ButtonsComponent
