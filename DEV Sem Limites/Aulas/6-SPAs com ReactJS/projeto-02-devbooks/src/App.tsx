import { ThemeProvider } from 'styled-components'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'
import { SingIn } from './pages/Auth/SignIn'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SingIn />} />

        </Routes>
      </BrowserRouter>
    </ ThemeProvider>
    
  )
}

export default App
