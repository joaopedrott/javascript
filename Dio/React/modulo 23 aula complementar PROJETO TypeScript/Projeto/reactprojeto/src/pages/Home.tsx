import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import { MouseEvent } from 'react';

const Home =()=>{
    const history = useNavigate();

    const handleClick = async (event: MouseEvent)=> {
      event.preventDefault();
      history('/perfil')
    }
    
    return (
        <Layout>
          <div className="col-4 m-auto">
            <h1>Login</h1>
            <div className="mb-3">
                <label htmlFor="gitUser" className="form-label">Usuario do github</label>
                <input className="form-control" id="gitUser" aria-describedby="userHelp"/>
                <div id="userHelp" className="form-text">
                  Informe seu usuario do GitHub.
                </div>
            </div>
            
            <button onClick={handleClick} type="button" className="btn btn-primary">Entrar</button>
            
          </div>
        </Layout>
      );
}

export default Home;