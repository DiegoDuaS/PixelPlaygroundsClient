import React from 'react'
import './App.css'
import { NavigationProvider } from './Hooks/useNavigation'
import { TokenProvider } from './Hooks/useToken'
import Pages from './Pages'

function App () {
  return (
    <>
      <TokenProvider>
        <NavigationProvider>
          <Pages />
        </NavigationProvider>
      </TokenProvider>
    </>
  );
}

export default App
