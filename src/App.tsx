import './App.css'
import { Navbar } from './components'
import { Home } from './pages'
import {Login} from './pages'
import store from './redux/store'
import { LayoutContainer } from './styled-components'
import {Provider} from 'react-redux'

function App() {


  return (
   
    <Provider store = {store}>

      <LayoutContainer>
        <Login/>
      </LayoutContainer>
    </Provider>
  )
}

export default App
