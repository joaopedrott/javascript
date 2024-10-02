import React from 'react';
import Menu from './components/Menu/Menu';
import './App.css'

function App() {
  const menuItems = ['Home', 'About', 'Contact'];

  return (
    <div>
      <Menu items={menuItems} />
      <p>Conteudo do site</p>
    </div>
  );
}

export default App;