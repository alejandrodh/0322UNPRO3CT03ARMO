import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Formulario from './components/Formulario/Formulario';
import CharactersRyM from './components/CharactersRyM/CharactersRyM';

function App() {
  return (
 
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          
          <div className="container-fluid">
            <h3>Formulario demo clase</h3>
            <Formulario /> 

            {/* Nueva sección Rick and Morty */}
            <h3 className="h3"> Rick and Morty</h3>
              <CharactersRyM />
            {/* Fin nueva sección Rick and Morty */}            

          </div>
        </div>

      </div>

    </div>
 
  );
}

export default App;
