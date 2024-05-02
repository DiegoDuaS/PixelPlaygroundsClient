import './App.css'
import { NavigationProvider } from './Hooks/useNavigation'
import Pages from './Pages'

function App() {

  return (
    <>
      <NavigationProvider>
        <Pages />
      </NavigationProvider>
    </>
  )
}

export default App
