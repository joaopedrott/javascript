import { ThemeProvider } from 'styled-components'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'
import { SingIn } from './pages/Auth/SignIn'
import { SingUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <BrowserRouter>

      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<SingIn />} />
            <Route path='/cadastro' element={<SingUp />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>



      </BrowserRouter>
    </ ThemeProvider>
    
  )
}

export default App
