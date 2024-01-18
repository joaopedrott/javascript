import { Header } from '../../components/Header';
import background from '../../assets/background.png'
import ItemList from '../../components/ItemList'
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
          <div>
            <h4 className='repositorio'>Repositorios</h4>
            <ItemList title="fisiotheapp-challenge" description="Full Stack Developer web and mobile, passionate to javascript and all your ecosystem."/>
            <ItemList title="fisiotheapp-challenge" description="Full Stack Developer web and mobile, passionate to javascript and all your ecosystem."/>
            <ItemList title="fisiotheapp-challenge" description="Full Stack Developer web and mobile, passionate to javascript and all your ecosystem."/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
