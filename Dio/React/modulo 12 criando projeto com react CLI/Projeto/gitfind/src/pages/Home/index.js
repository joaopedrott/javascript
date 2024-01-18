import { Header } from '../../components/Header';
import background from '../../assets/background.png'
import './styles.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} className="background" alt="background app"></img>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/13596247?v=4" className="profile" alt="imagem de perfil" />
            <div>
              <h3>Joao Pedro Guedes Torres</h3>
              <span>@joaopedrott</span>
              <p>Descricao</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;
