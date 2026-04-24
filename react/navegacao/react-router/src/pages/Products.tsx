import { useSearchParams } from "react-router";

export function Products(){
  const [searchParams] = useSearchParams()
  const category = searchParams.get("category")
  
  return(
    <div>
      <nav>
        <a href="/">HOME</a>
      </nav>
      <h1>Página Products</h1>

      {category && (<span>Categoria: <strong>{category}</strong></span>)}
      <div>
        <a href="/details/1">produto 1</a>
      </div>
    </div>
  );
}