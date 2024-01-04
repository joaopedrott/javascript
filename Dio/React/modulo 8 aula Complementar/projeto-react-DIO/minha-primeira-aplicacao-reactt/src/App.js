import { useState } from "react";

function App() {
  const [contador, updateContador] = useState(0);

  function adicionarMaiUmNoContador(){
    updateContador(contador+1);
  }

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={adicionarMaiUmNoContador}>Contar</button>
    </div>
  );
}

export default App;
