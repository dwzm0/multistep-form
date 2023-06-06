import React from 'react'
import GlobalStyle, { Container } from './globalStyle'
import Main from './components/Main/Main'

const App = (): JSX.Element => {
  return (
    <>
    <GlobalStyle />
      <Container>
        <Main />
      </Container>
    </>
  )
}

export default App
