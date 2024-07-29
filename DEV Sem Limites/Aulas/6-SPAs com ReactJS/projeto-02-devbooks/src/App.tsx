import { ThemeProvider } from 'styled-components'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'
import { SingIn } from './pages/Auth/SignIn'
import { SingUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <BrowserRouter>

      <AuthProvider>
      <Routes>
          <Route path='/' element={<SingIn />} />
          <Route path='/cadastro' element={<SingUp />} />
        </Routes>
      </AuthProvider>


      </BrowserRouter>
    </ ThemeProvider>
    
  )
}

export default App
