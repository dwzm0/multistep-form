import React, { createContext, useContext, useState } from 'react'

export const AppStateContext = createContext({})

export const AppProvider = ({ children }: any): any => {
  const value = useState({})
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = (): any => {
  const context = useContext(AppStateContext)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider')
  }
  return context
}
