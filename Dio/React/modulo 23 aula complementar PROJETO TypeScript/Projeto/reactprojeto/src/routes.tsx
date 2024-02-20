import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from './pages/Home';
import Perfil from './pages/Perfil'

const MainRoutes =()=> {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </Router>
      );
}

export default MainRoutes;