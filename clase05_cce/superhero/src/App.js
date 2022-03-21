import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Character from './components/Character/Character';

function App() {
  return (
 
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          
          <div className="container-fluid">

            {/* Nueva sección Personajes */}
            <h3 className="h3"> Personajes de películas</h3>
            <Character />
            {/* Fin nueva sección Personajes */}
          </div>
        </div>

      </div>

    </div>
 
  );
}

export default App;
