import React from 'react';
import './assets/CSS/App.css'; 

// Importar componentes

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';


function hola(nombre){

  var plantilla = (<h2> Hola bienvenido al curso de {nombre}</h2>);

  return plantilla;
}

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Slider/>
      

      <div className="center">
      <section id="content">
        <p>Todo el contenido aqui:</p>
      </section>
      <Sidebar/>
      </div>
      {/*code*/}
     
     
    </div>
  );
}

export default App;
