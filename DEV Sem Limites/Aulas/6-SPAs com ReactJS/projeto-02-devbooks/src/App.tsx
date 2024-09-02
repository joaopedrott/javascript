import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

import { RequireAuth } from './components/RequireAuth/RequireAuth'

import { SingIn } from './pages/Auth/SignIn'
import { SingUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'
import { Home } from './pages/Home'
import { Books } from './pages/Books'
import { BookDetail } from './pages/BookDetail'

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

            <Route path='/home' element={<RequireAuth>
              <Home/>
              </RequireAuth>} />

            <Route path='/livros' element={<RequireAuth>
              <Books/>
              </RequireAuth>} />

              <Route path='/livros/:bookId' element={<RequireAuth>
              <BookDetail/>
              </RequireAuth>} />

          </Routes>
        </AuthProvider>
      </QueryClientProvider>



      </BrowserRouter>
    </ ThemeProvider>
    
  )
}

export default App
