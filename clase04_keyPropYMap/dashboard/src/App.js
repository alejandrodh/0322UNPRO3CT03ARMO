import React from "react";
import Saludo from "./components/Saludo/Saludo";
import Menu from "./components/Menu/Menu";

function App() {

  let menu = ["Inicio", "Contact us", "Products", "FAQs"];

  return (
    <div className="wrapper">
      {/* Componente saludo */}
        <Saludo nombre="Ale"/>
        
      <nav className="main-nav">
        <ul className="menu">
          {/* Elementos de menu */}
          <Menu menuItem={menu}/>

        </ul>
        
      </nav>


    </div>
  );
}

export default App;
