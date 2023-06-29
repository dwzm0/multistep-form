import React from 'react'
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './state'
import GlobalStyle, { GeneralContainer, PanelContainer } from './globalStyle'
import { SideBar, Contact, Plan, Addons, CheckOut, Final, addonsProps, checkOutProps, sideBarProps, planProps, finalProps, contactProps } from './components'

const App = (): JSX.Element => {
  return (
    <>
    <GlobalStyle />
      <GeneralContainer>
        <PanelContainer>
          <AppProvider>
            <HashRouter>
              <SideBar {...sideBarProps}/>
               <Routes>
                  <Route path='/' element={<Contact {...contactProps}/>} />
                  <Route path='/plan' element={<Plan {...planProps} />} />
                  <Route path='/addons' element={<Addons {...addonsProps} />} />
                  <Route path='/checkout' element={<CheckOut {...checkOutProps} />} />
                  <Route path='/final' element={<Final {...finalProps} />} />
               </Routes>
            </HashRouter>
          </AppProvider>
        </PanelContainer>
      </GeneralContainer>
    </>
  )
}

export default App
