import React from 'react'
import GlobalStyle, { GeneralContainer, PanelContainer } from './globalStyle'
import { SideBar, Contact, Addons, CheckOut, addonsProps, checkOutProps, sideBarProps } from './components'

const App = (): JSX.Element => {
  return (
    <>
    <GlobalStyle />
      <GeneralContainer>
        <PanelContainer>
          <SideBar {...sideBarProps}/>
          <Contact />
      </PanelContainer>
      </GeneralContainer>
    </>
  )
}

export default App
