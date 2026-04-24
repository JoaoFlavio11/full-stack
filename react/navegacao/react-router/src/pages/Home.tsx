import { useNavigate } from "react-router";

export function Home(){
  const navigate = useNavigate()
  return(
    <div>
      <h1>Página home</h1>
      <nav>
        <a href="/products?tv">Produtos</a>
      </nav>
      <button type="button" onClick={() => navigate("/products")}>Ver produtos</button>
    </div>
  );
}