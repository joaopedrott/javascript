import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";
import { useParams, useNavigate } from "react-router-dom";

const Perfil = () => {
  const navigate = useNavigate();
  const { user } = useParams<{ user: string }>();

  useEffect(() => {
    if (user !== 'joao') {
      navigate('/'); // Redireciona para a página inicial
    }
  }, [user]); // Adicione 'user' como dependência

    return (
        <Layout>
          <Table/>
        </Layout>
        
      );
}

export default Perfil;