import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import { MouseEvent, useState } from 'react';
import gitApi from "../api/github";

const Home =()=>{
    const [user, setUser] = useState('');
    const [invalid, setInvalid] = useState(false);
    const history = useNavigate();

    const handleClick = async (event: MouseEvent)=> {
      event.preventDefault();
      if(user.length === 0){
        return alert('Por favor informe um usuario')
      }
      
      gitApi.getUser(user).then(response=> history(`/${response.login}`))
      .catch(error=>{
        setInvalid(true)
      })
      
      
    }
    
    return (
        <Layout>
          <div className="col-4 m-auto">
            <h1>Login</h1>
            <div className="mb-3">
                <label htmlFor="gitUser" className="form-label">Usuario do github</label>
                <input 
                  type="text" 
                  aria-label="User" className="form-control" 
                  id="gitUser" aria-describedby="userHelp"
                  value={user}
                  onChange={event => setUser(event.target.value)}
                  />
                <div id="userHelp" className="form-text">
                  Informe seu usuario do GitHub.
                </div>
                {
                  invalid && (
                    <div id="userHelp" className="form-text text-danger">
                  Usuario invalido.
                </div>

                  )
                }
            </div>
            
            <button onClick={handleClick} type="button" className="btn btn-primary">Entrar</button>
            
          </div>
        </Layout>
      );
}

export default Home;