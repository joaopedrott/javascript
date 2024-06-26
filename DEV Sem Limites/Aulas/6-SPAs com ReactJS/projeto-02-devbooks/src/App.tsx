import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { GlobalStyles } from './styles/global'

import { Search } from './pages/Search'
import { Books } from './pages/Books'
import { BookDetail } from './pages/BookDetail'

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/Books' element={<Books />} />
          <Route path='/Books/:bookId' element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
