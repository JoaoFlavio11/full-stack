import "./styles.css"
import { Outlet } from "react-router"

export default function Layout(){
  return(
    <div>
      <header><p>Olá João</p></header>

      <Outlet/>

      <footer><span>2026</span></footer>
    </div>
  );
}