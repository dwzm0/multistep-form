import React from 'react'
import GlobalStyle, { GeneralContainer } from './globalStyle'
import Panel from './components/Panel/Panel'

const App = (): JSX.Element => {
  return (
    <>
    <GlobalStyle />
      <GeneralContainer>
        <Panel />
      </GeneralContainer>
    </>
  )
}

export default App
