import { useNavigate, useParams } from "react-router";

export function Details(){
  const {id} = useParams()
  const navigate = useNavigate()

  return(
    <div>
      <nav>
        <button type="button" onClick={() => navigate("/products")}>Retornar</button>
      </nav>
      <h1>Página Detalhes</h1>

      <span>ID: <strong>{id}</strong></span>
    </div>
  );
}