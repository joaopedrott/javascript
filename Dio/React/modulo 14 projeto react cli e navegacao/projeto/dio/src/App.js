import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import {Teste} from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/> 
        <Route  path="/feed" element={<Feed/>}/> 
        <Route  path="/teste" element={<Teste/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
